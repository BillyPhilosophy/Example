import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
export default {
  input: 'src/main.js',
  output: {
      file: 'bundle.js',
      format: 'cjs'
  },
  plugins: [
      resolve(),
      babel({ babelHelpers: 'bundled' })
  ],
  // // 指出哪些模块应该视为外部模块
  external: id => /lodash/.test(id)

};