var express = require('express');
var router = express.Router();
var db = require('../db/queries');

router.get('/', function(req, res, next){
  res.render('index', { title: "TweedApp" });
});

// GET FROM DATABASE
router.get('/getTweeds', db.getTweeds);

// POST TO DATABASE
router.post('/createTweed', db.createTweed);

module.exports = router;