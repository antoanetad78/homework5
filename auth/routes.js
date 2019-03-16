const { Router } = require('express')
const { toJWT, toData } = require('./jwt')
const User = require('../users/model')
const bcrypt = require('bcrypt');
const auth = require('./middleware')

const router = new Router()

router.post('/tokens', (req, res, next) => {
    const email = req.body.email
    const password = req.body.password
    
    if(!email || !password){
        return res.status(400).send({
            message: 'Email and password are required'
        })
    }
    else{
        User
        .findOne({
          where: {
            email
          }
        })
        .then(user => {
          if (!user) {
            res.status(400).send({
              message: 'User not found'
            })
           }

          if (bcrypt.compareSync(password, user.password)) {
            res.send({
              token: toJWT({ userId: user.id })
            })
          }

          else {
            res.status(400).send({
              message: 'Invalid password'
            })
          }

        })
        .catch(err => {
          console.error(err)
          res.status(500).send({
            message: 'Something went wrong'
          })
        })
        
    }
})


module.exports = router