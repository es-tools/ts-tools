import replace from 'rollup-plugin-replace'
import rollup from './rollup.base'

rollup.input = 'src/index.ts'
rollup.output = Object.assign(rollup.output, {
  name: '$tools',
  file: 'dist/test.js',
  sourcemap: true,
  format: 'umd' // amd,cjs,es,iife,umd
})

rollup.plugins.push(
  replace({ 'process.env.NODE_ENV': JSON.stringify('development') })
)

export default rollup
