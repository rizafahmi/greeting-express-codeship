var express = require('express');
var router = express.Router();

import greeting from '../greeting'

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', greeting: greeting(new Date) });
});

module.exports = router;
