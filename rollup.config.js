import path from 'path';
import svgr from '@svgr/rollup';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import alias from '@rollup/plugin-alias';
import url from '@rollup/plugin-url';
import postcss from 'rollup-plugin-postcss';
import visualizer from 'rollup-plugin-visualizer';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import { terser } from 'rollup-plugin-terser';
import { getFiles } from './scripts/build-utils';

const extensions = ['.js', '.ts', '.jsx', '.tsx'];
const excludeExtensions = ['.test.js', '.test.ts', '.test.jsx', '.test.tsx'];

export default {
  input: [
    './src/index.ts',
    ...getFiles('./src/ui', extensions, excludeExtensions),
    ...getFiles('./src/hooks', extensions, excludeExtensions),
    ...getFiles('./src/utils', extensions, excludeExtensions),
  ],
  output: {
    dir: 'dist',
    format: 'esm',
    preserveModules: true,
    preserveModulesRoot: 'src',
    sourcemap: true,
  },
  plugins: [
    peerDepsExternal(),
    alias({
      entries: [
        {
          find: 'react',
          replacement: path.join(__dirname, 'node_modules', 'react'),
        },
        {
          find: 'react/jsx-runtime',
          replacement: path.join(
            __dirname,
            'node_modules',
            'react/jsx-runtime',
          ),
        },
      ],
    }),
    resolve(),
    commonjs(),
    typescript({
      tsconfig: './tsconfig.build.json',
      declaration: true,
      declarationDir: 'dist',
    }),
    postcss({
      modules: true,
      minimize: true,
    }),
    terser(),
    url(),
    svgr(),
    visualizer({
      filename: 'bundle-analysis.html',
      open: false,
    }),
  ],
  external: ['react', 'react-dom'],
};
