var express = require('express');
var router = express.Router();
var knex = require('../db/knex')

/* GET home page. */
router.get('/', function(req, res, next) {
  knex('posts').then(function(posts){
    res.json(posts)
  })
});

router.post('/', function(req, res, next){
  // knex('users').insert({username: req.body})
})

module.exports = router;
