import commonjs from 'rollup-plugin-commonjs' // common转 Es5
import resolve from 'rollup-plugin-node-resolve' // 解决外部模块问题
import progress from 'rollup-plugin-progress'
import typescript from 'rollup-plugin-typescript2'

export default {
  cache: false,
  external: [],
  output: {
    globals: {}
  },
  plugins: [
    resolve({
      customResolveOptions: {
        moduleDirectory: 'node_modules'
      }
    }),
    commonjs(),
    typescript({
      check: false
    }),
    progress({
      clearLine: false
    })
  ]
}
