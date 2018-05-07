import rollup from 'rollup'
import uglify from 'rollup-plugin-uglify'
import replace from 'rollup-plugin-replace'
import config from './rollup.base'

// 多文件的
const argv = process.argv
let libName = argv.filter(arg => arg.includes('lib'))
libName = libName.length && libName[0].replace('lib=', '')

if (libName === 'index.ts') {
  libName = 'index'
  config.input = `src/index.ts`
} else {
  config.input = `src/${libName}/${libName}.ts`
}

config.output = Object.assign(config.output, {
  name: '$tools',
  file: `dist/${libName}.js`,
  sourcemap: false,
  format: 'umd' // amd,cjs,es,iife,umd
})

config.plugins.push(
  replace({ 'process.env.NODE_ENV': JSON.stringify('production') }),
  uglify()
)

if (process.argv.includes('bundle')) {
  const rollupAnalyzer = require('rollup-analyzer')({ limit: 5 })
  rollup.rollup(config).then((bundle) => {
    rollupAnalyzer.formatted(bundle).then(console.log).catch(console.error)
  })
}

export default config