const express = require('express')
const products = require('./db2')
const productrouter = express.Router()

productrouter.get('/getall', (req, res) => {
  res.send({ msg: 'succesfully geted', response: products})
})

module.exports=productrouter
