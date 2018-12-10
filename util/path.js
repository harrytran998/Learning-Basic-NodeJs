const path = require('path')

const rootPath = path.dirname(process.mainModule.filename)
const pathData = path.join(path.dirname(process.mainModule.filename), 'data', 'products.json')

module.exports = {
  rootPath,
  pathData,
  
}
