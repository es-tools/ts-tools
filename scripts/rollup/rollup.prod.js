import rollup from 'rollup'
import uglify from 'rollup-plugin-uglify'
import replace from 'rollup-plugin-replace'
import config from './rollup.base'

const rollupAnalyzer = require('rollup-analyzer')({ limit: 5 })

config.input = 'src/index.ts'

config.output = Object.assign(config.output, {
  name: '$tools',
  file: 'dist/index.js',
  sourcemap: false,
  format: 'es' // amd,cjs,es,iife,umd
})

config.plugins.push(
  replace({ 'process.env.NODE_ENV': JSON.stringify('production') }),
  uglify()
)

if (process.argv.includes('bundle')) {
  rollup.rollup(config).then((bundle) => {
    rollupAnalyzer.formatted(bundle).then(console.log).catch(console.error)
  })
}

export default config