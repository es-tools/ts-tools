const digo = require('digo')

// 打包文件
exports.deploy = () => {
  digo.deleteDir('./dist')
  digo.readDir('./src').map(fileName => digo.exec(`rollup -c scripts/rollup/rollup.prod.js -e lib=${fileName}`))
}