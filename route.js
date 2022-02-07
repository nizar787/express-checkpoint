const express = require('express')
const users = require('./db')
const router=express.Router()

router.get('/getall', (req, res) => {
  res.send({ msg: 'succesfully geted', response: users })
})
router.post('/adduser' ,(req,res)=>{
   res.send(users.concat(req.body))
})
router.delete('/delete/:id', (req, res) => {
  res.send(users.filter(el=>el.id!==parseInt(req.params.id)))
  console.log(req.params)
})
router.get('/students', (req, res) => {
  res.send('hello')
})



module.exports=router