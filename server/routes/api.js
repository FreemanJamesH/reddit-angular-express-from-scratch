var express = require('express');
var router = express.Router();
var knex = require('../db/knex')

/* GET home page. */
router.get('/', function(req, res, next) {
  knex('posts').innerJoin('users', 'posts.user_id', 'users.id').then(function(posts){
    res.json(posts)
  })
});

router.post('/', function(req, res, next){
  console.log('posting!')
  knex('posts').insert(req.body).returning('*').then(function(updatedDB){
    res.json(updatedDB[0])
  })
})

router.post('/delete', function(req,res,next){
  knex('posts').where('id', req.body.id).del().then(function(){
    res.send('hello')
  })
})

router.get('/users', function(req, res, next){
  knex('users').then(function(users){
    res.json(users)
  })
})

router.post('/signup', function(req, res, next){
  knex('users').insert(req.body).returning('*').then(function(userReturn){
    res.json(userReturn[0])
  })
})

module.exports = router;
