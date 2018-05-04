const digo = require('digo')

exports.dev = () => digo.exec('rollup -c scripts/rollup/rollup.dev.js -w', () => {})

exports.deploy = () => digo.exec('rollup -c scripts/rollup/rollup.prod.js')
