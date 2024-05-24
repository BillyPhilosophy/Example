// rollup.config.js
export default {
  input: {
    a: 'src/main-a.js',
    'b/index': 'src/main-b.js'
  },
  output: {
    entryFileNames: 'entry-[name].js',
    format:"cjs"
  }
};