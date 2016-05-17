var express = require('express');
var router = express.Router();
var knex = require('../db/knex')
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

/* GET home page. */
router.get('/', function(req, res, next) {
  knex('posts').innerJoin('users', 'posts.user_id', 'users.id').then(function(posts) {
    res.json(posts)
  })
});

router.post('/', function(req, res, next) {
  console.log('posting!')
  knex('posts').insert(req.body).returning('*').then(function(updatedDB) {
    res.json(updatedDB[0])
  })
})

router.post('/delete', function(req, res, next) {
  knex('posts').where('id', req.body.id).del().then(function() {
    res.send('hello')
  })
})

router.get('/users', function(req, res, next) {
  knex('users').then(function(users) {
    res.json(users)
  })
})

router.post('/signup', function(req, res, next) {
  knex('users')
    .whereRaw('lower(email) = ?', req.body.email.toLowerCase())
    .count()
    .first()
    .then(function(result) {
      if (result.count === "0") {
        var saltRounds = 4;
        var passwordHash = bcrypt.hashSync(req.body.password, saltRounds)

        knex('users').insert({
            email: req.body.email,
            username: req.body.username,
            password: passwordHash
          })
          .returning('*').then(function(userReturn) {
            var user = (userReturn[0])
            var token = jwt.sign({
              id: user.id
            }, 'secret')

            res.json({
              id: user.id,
              email: user.email,
              name: user.name,
              token: token
            })
          })
      } else {
        res.status(422).json({
          errors: ['Email already taken']
        })
      }
    })
})

router.get('/user', function(req, res, next) {
  if (req.headers.authorization) {
    const token = req.headers.authorization.split(' ')[1];
    const payload = jwt.verify(token, 'secret')
    console.log(payload)
    knex('users').where('id', payload.id).then(function(user) {
      if (user) {
        console.log(user)
        res.json({id:user.id, email:user.email, username: user.username, password: user.password})
      }
    })
  }
})

module.exports = router;
