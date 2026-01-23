import { defineConfig } from 'tsdown'

export default defineConfig({
  entry: ['src/index.ts'],
  outDir: 'dist',
  format: ['esm', 'cjs'],
  outExtensions({ format }) {
    return {
      js: format === 'cjs' ? '.cjs' : '.mjs',
      dts: '.ts',
    }
  },
  dts: true,
  clean: true,
  sourcemap: true,
  minify: false,
  treeshake: true,
  platform: 'neutral',
  target: 'es2018',
  external: ['axios'],
})
