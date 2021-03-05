"use strict";

var express = require('express');

var router = express.Router(); //ROUTES

router.get('/', function (req, res) {
  res.send('WE ARE POSTS');
});
router.get('/specific', function (req, res) {
  res.send('Specific Post');
});
module.exports = router;