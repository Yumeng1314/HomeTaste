import { useEffect, useMemo, useRef, useState } from 'react';
import type { Recipe } from '../types';
import { formatAmount } from '../household';

function recipeText(recipe: Recipe) {
  return [
    recipe.title, recipe.description,
    `准备 ${recipe.prepTime} 分钟 · 烹饪 ${recipe.cookTime} 分钟`,
    ...(recipe.ingredients.length ? ['\n食材', ...recipe.ingredients.map(item => `${item.name} ${item.toTaste ? '适量' : formatAmount(item.amount, item.unit)}`)] : []),
    ...(recipe.steps.length ? ['\n步骤', ...recipe.steps.map((step, i) => `${i + 1}. ${step}`)] : []),
    ...(recipe.source?.url ? [`\n来源 ${recipe.source.url}`] : []),
  ].filter(Boolean).join('\n');
}

async function safeCover(source: string, signal: AbortSignal): Promise<string | null> {
  if (!source) return null;
  if (source.startsWith('data:image/')) return source;
  try {
    const url = new URL(source, location.href);
    if (!['http:', 'https:'].includes(url.protocol)) return null;
    const response = await fetch(url, { mode: 'cors', credentials: 'omit', signal });
    if (!response.ok) return null;
    const image = await response.blob();
    return image.size <= 12_000_000 && image.type.startsWith('image/') ? URL.createObjectURL(image) : null;
  } catch {
    return null;
  }
}

export default function RecipeExport({ recipe, onClose }: { recipe: Recipe; onClose: () => void }) {
  const card = useRef<HTMLDivElement>(null);
  const [cover, setCover] = useState<string | null | undefined>();
  const [prepared, setPrepared] = useState<{ file: File; url: string } | null>(null);
  const [notice, setNotice] = useState('');
  const [error, setError] = useState('');
  const [retry, setRetry] = useState(0);
  const title = recipe.title.replace(/[\\/:*?"<>|]/g, '-').slice(0, 120) || 'HomeTaste-recipe';
  const text = recipeText(recipe);
  const textUrl = useMemo(() => `data:text/plain;charset=utf-8,${encodeURIComponent(text)}`, [text]);

  useEffect(() => {
    let active = true;
    let objectUrl: string | null = null;
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 3000);
    safeCover(recipe.images[0], controller.signal).then(value => {
      objectUrl = value?.startsWith('blob:') ? value : null;
      if (active) setCover(value);
      else if (objectUrl) URL.revokeObjectURL(objectUrl);
    }).finally(() => clearTimeout(timeout));
    return () => {
      active = false;
      clearTimeout(timeout);
      controller.abort();
      if (objectUrl) URL.revokeObjectURL(objectUrl);
    };
  }, [recipe.images[0]]);

  useEffect(() => {
    if (cover === undefined || !card.current) return;
    let active = true;
    let url: string | undefined;
    const element = card.current;
    (async () => {
      const { default: html2canvas } = await import('html2canvas');
      const image = element.querySelector('img');
      if (image) {
        try { await image.decode(); } catch { if (active) setCover(null); return; }
      }
      if (!active) return;
      const width = element.offsetWidth;
      const height = element.scrollHeight;
      const scale = Math.min(2, 8192 / height, Math.sqrt(7_000_000 / (width * height)));
      const canvas = await html2canvas(element, { backgroundColor: '#fffcf5', scale, logging: false });
      const blob = await new Promise<Blob | null>(resolve => canvas.toBlob(resolve, 'image/png'));
      if (!blob) throw new Error('PNG unavailable');
      if (!active) return;
      const file = new File([blob], `${title}.png`, { type: 'image/png' });
      url = URL.createObjectURL(file);
      setPrepared({ file, url });
    })().catch(error => {
      console.warn('Recipe image preparation failed', error);
      if (active) setError('图片生成失败。可以重试，或复制文字菜谱。');
    });
    return () => {
      active = false;
      if (url) URL.revokeObjectURL(url);
    };
  }, [cover, retry, title, text]);

  async function shareImage() {
    if (!prepared) return;
    const payload = { files: [prepared.file], title: recipe.title };
    if (!navigator.share || !navigator.canShare?.({ files: payload.files })) {
      setNotice('此浏览器不支持分享图片文件，可以点「保存图片」。');
      return;
    }
    try {
      await navigator.share(payload);
      setNotice('');
    } catch (error) {
      setNotice(error instanceof DOMException && error.name === 'AbortError'
        ? '已取消分享。' : '系统分享未完成，可以点「保存图片」。');
    }
  }

  async function copyText() {
    try {
      await navigator.clipboard.writeText(text);
      setNotice('已复制文字菜谱。');
    } catch {
      setNotice('浏览器未允许访问剪贴板，可以点「保存文字」。');
    }
  }

  return (
    <div role="dialog" aria-modal="true" aria-labelledby="recipe-share-title" className="fixed inset-0 z-[300] flex flex-col bg-gray-900/95 text-white">
      <header className="flex items-center justify-between gap-3 border-b border-white/10 px-4 pb-2 pt-[max(0.5rem,env(safe-area-inset-top))]">
        <h2 id="recipe-share-title" className="font-bold">分享菜谱</h2>
        <button onClick={onClose} className="min-h-11 rounded-xl bg-white/10 px-3 text-sm font-bold">关闭</button>
      </header>
      <div className="min-h-0 flex-1 overflow-y-auto px-4 py-5">
        <div ref={card} className="mx-auto w-full max-w-[420px] space-y-5 break-words border-4 border-double border-emerald-800/50 bg-[#fffcf5] p-5 text-emerald-950">
          <header className="space-y-2 text-center">
            <p className="text-xs font-bold">{recipe.category}</p>
            <h3 className="text-2xl font-black">{recipe.title}</h3>
            {recipe.description && <p className="whitespace-pre-wrap text-sm text-emerald-900">{recipe.description}</p>}
            <p className="text-xs text-emerald-900">准备 {recipe.prepTime} 分钟 · 烹饪 {recipe.cookTime} 分钟</p>
          </header>
          {cover && <img src={cover} className="aspect-video w-full rounded-lg object-cover" alt="" />}
          {recipe.ingredients.length > 0 && (
            <section>
              <h4 className="mb-2 border-b border-emerald-900/20 pb-1 text-sm font-bold">食材</h4>
              <ul className="space-y-1 text-sm">
                {recipe.ingredients.map((item, i) => <li key={i} className="flex justify-between gap-3">
                  <span>{item.name}</span><span className="shrink-0">{item.toTaste ? '适量' : formatAmount(item.amount, item.unit)}</span>
                </li>)}
              </ul>
            </section>
          )}
          {recipe.steps.length > 0 && (
            <section>
              <h4 className="mb-2 border-b border-emerald-900/20 pb-1 text-sm font-bold">步骤</h4>
              <ol className="list-decimal space-y-2 pl-5 text-sm">
                {recipe.steps.map((step, i) => <li key={i} className="whitespace-pre-wrap">{step}</li>)}
              </ol>
            </section>
          )}
          {recipe.source?.url && <p className="break-all text-xs">来源 {recipe.source.url}</p>}
          <p className="text-center text-xs font-bold text-emerald-800">HomeTaste</p>
        </div>
      </div>
      <footer className="space-y-2 border-t border-white/10 bg-gray-900 px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3">
        {(error || notice || !prepared || (recipe.images.length > 0 && cover === null)) && (
          <p role="status" className="mx-auto max-w-lg text-sm text-white/85">
            {error || notice || (!prepared ? '正在准备分享图片…' : '原图无法载入，已生成不带封面的菜谱卡。')}
          </p>
        )}
        <div className="mx-auto grid max-w-lg grid-cols-2 gap-2">
          {error ? <button className="min-h-11 rounded-xl bg-emerald-700 px-3 text-sm font-bold" onClick={() => {
            setError('');
            setRetry(value => value + 1);
          }}>重新生成</button> : <button disabled={!prepared} className="min-h-11 rounded-xl bg-emerald-700 px-3 text-sm font-bold disabled:opacity-50"
            onClick={shareImage}>分享图片</button>}
          {prepared ? <a className="grid min-h-11 place-items-center rounded-xl bg-white/10 px-3 text-sm font-bold" href={prepared.url} download={prepared.file.name}>保存图片</a>
            : <span className="grid min-h-11 place-items-center rounded-xl bg-white/5 px-3 text-sm font-bold text-gray-400">保存图片</span>}
          <button className="min-h-11 rounded-xl bg-white/10 px-3 text-sm font-bold" onClick={copyText}>复制文字</button>
          <a className="grid min-h-11 place-items-center rounded-xl bg-white/10 px-3 text-sm font-bold" download={`${title}.txt`} href={textUrl}>保存文字</a>
        </div>
      </footer>
    </div>
  );
}
