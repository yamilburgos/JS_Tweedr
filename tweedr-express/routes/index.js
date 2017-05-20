var express = require('express');
var router = express.Router();
var db = require('../db/queries');


/*router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});*/

// GET FROM DATABASE
router.get('/', db.getTweeds);

// POST TO DATABASE
router.post('/', db.createTweed);

module.exports = router;