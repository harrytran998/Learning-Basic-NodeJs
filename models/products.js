const fs = require('fs')
const {
  pathData
} = require('../util/path')

module.exports = class Product {
  constructor(title) {
    this.title = title
  }

  save() {
    fs.readFile(pathData, (err, fileContent) => {
      let products = []
      if (!err) {
        products = JSON.parse(fileContent)
      }
      products.push(this)
      fs.writeFileSync(pathData, JSON.stringify(products), (err) => {
        console.log(err)
      })
    })
  }

  static fetchAll() {
    fs.readFileSync(pathData, (err, allData) => {
      if (!err) {
        return JSON.parse(allData)
      }
      return []
    })
  }

}
