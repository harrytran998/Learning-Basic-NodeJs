const express = require('express')
const path = require('path')

const adminRouter = express.Router()

adminRouter.use('/add-product', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '../', 'views', 'add-product.html'))
})

adminRouter.post('/product', (req, res) => {
  console.log(req.body)
  res.redirect('/')
})

module.exports = adminRouter
