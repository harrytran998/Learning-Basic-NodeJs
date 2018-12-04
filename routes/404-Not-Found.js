const express = require('express')
const path = require('path')

const errorRouter = express.Router()

errorRouter.use('/', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '../', 'views', '404-Not-Found.html'))
})


module.exports = errorRouter
