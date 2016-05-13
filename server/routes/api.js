var express = require('express');
var router = express.Router();
var knex = require('../db/knex')

/* GET home page. */
router.get('/', function(req, res, next) {
  knex('users').then(function(users){
    res.json(users)
  })
});

module.exports = router;
