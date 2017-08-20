var express = require('express');
var jsonfile = require('jsonfile');
var path = require('path');
var config = require('../config');

var router = express.Router();

/* GET words listing. */
router.get('/', function(req, res, next) {
  jsonfile.readFile(config.wordsPath + 'words.json', function (err, words) {
    if (err) {
      next();
    } else {
      res.render('words', {title: '我的心里话', words});
    }
  });
});

module.exports = router;
