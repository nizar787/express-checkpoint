const express = require('express')
const path = require('path')
const router=require('./route')
const productrouter=require('./route2')

const app=express()
app.use(express.json())

app.use('/users',router)
app.use('/product',productrouter)

// const app = express()

// app.use(express.static('components'))

app.listen(5000, (err) => {
  err ? console.log(err) : console.log('server is running')
})
