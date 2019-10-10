import typescript from 'rollup-plugin-typescript';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import postcss from 'rollup-plugin-postcss';
import pkg from './package.json';

function toRecordPath(path) {
  return path.replace(/^([\w]+)\//, '$1/record/').replace('rrweb', 'rrweb-record');
}

function toMinPath(path) {
  return path.replace(/\.js$/, '.min.js');
}

let configs = [
  {
    input: './src/index.ts',
    plugins: [
      resolve(),
      commonjs(),
      typescript(),
      postcss({
        extract: false,
        inject: false,
      }),
    ],
    output: [
      {
        format: 'esm',
        file: pkg.module,
      },
    ],
  }
];

export default configs;
