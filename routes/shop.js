const express = require('express')
const path = require('path')

const shopRouter = express.Router()

shopRouter.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'))
})

module.exports = shopRouter
