import path from 'path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    outDir: 'dist', // Diretório de saída padrão
  },
  server: {
    fs: {
      allow: ['..'], // Permite acessar arquivos fora do diretório root, se necessário
    },
  },
  // Configuração para corrigir rotas no ambiente de produção
  esbuild: {
    loader: 'tsx',
  },
});
