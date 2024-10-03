import path from 'path';
import { defineConfig } from 'vite';
import { peerDependencies, dependencies } from './package.json';

const config = defineConfig({
  base: './',
  build: {
    sourcemap: true,
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      formats: ['es', 'cjs'],
      fileName: (format) => `index.${format === 'es' ? 'js' : format}`,
    },
    rollupOptions: {
      external: [...Object.keys(peerDependencies ?? {}), ...Object.keys(dependencies ?? {})],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
});
export default config;
