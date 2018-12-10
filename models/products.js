const fs = require('fs')
const {
  pathData
} = require('../util/path')

const getProductsFromFile = (callback) => {
  fs.readFileSync(pathData, (err, allData) => {
    if (!err) {
      callback(JSON.parse(allData))
    } else {
      callback([])
    }
  })
}
module.exports = class Product {
  constructor(title) {
    this.title = title
  }

  save() {
    getProductsFromFile((products) => {
      products.push(this)
      fs.writeFileSync(pathData, JSON.stringify(products), (err) => {
        console.log(err)
      })
    })
  }

  /**
   * @returns {Array} JSON.parse(allData)
   */
  static fetchAll(callback) {
    getProductsFromFile(callback)
  }
}
