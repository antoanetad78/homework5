const { Router } = require('express')
const User = require('./model')
const bcrypt = require('bcrypt');

const router = new Router()


router.post('/users', (req, res, next) => {
    const email = req.body.email
    const password = req.body.password
    const confirmation_password = req.body.confirmation_password

   const newUser = (email, password, confirmation_password) => {
    if(password !== confirmation_password){
      return res.status(422).send({
        message: `Invalid email or password. User was not created.`
      })
    }
    else return user = {
      email: email,
      password: bcrypt.hashSync(password, 10)
  }
   } 
    
  User
    .create(newUser(email, password, confirmation_password))
    .then(user => {
      return res.status(201).send(user)
    })
    .catch(console.error)
})



module.exports = router