// const path = require('path')

const express = require('express')

// const rootDir = require('../util/path')

const router = express.Router()

router.get('/', (req, res) => {
  // res.sendFile(path.join(rootDir, 'views', 'shop.html'))
  res.render('shop')  
})

module.exports = router
