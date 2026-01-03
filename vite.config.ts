
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    rollupOptions: {
      // 关键：将这些模块标记为外部，不参与打包
      external: [
        'react',
        'react-dom',
        'react-dom/client',
        'html2canvas',
        '@google/genai',
        'firebase/app',
        'firebase/database'
      ],
      output: {
        // 确保输出格式支持浏览器原生 ESM
        format: 'esm'
      }
    }
  },
  // 开发环境下也排除这些大库的预构建，直接通过网络加载
  optimizeDeps: {
    exclude: ['react', 'react-dom', 'html2canvas', '@google/genai', 'firebase/app', 'firebase/database']
  }
});
