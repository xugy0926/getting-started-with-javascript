var fs = require('fs');
var path = require('path');
var jsonfile = require('jsonfile');
var express = require('express');
var config = require('../config');

var router = express.Router();
var catelog = require('../public/content/catelog');

router.get('/catelog', function(req, res, next) {
  res.json({result: {code: 1, catelog}});
});

router.post('/catelog', function(req, res, next) {
  res.json({result: {code: 1, catelog}});
});

router.get('/words', function(req, res, next) {
  jsonfile.readFile(config.wordsPath + 'words.json', function (err, words) {
    if (err) {
      res.json({result: {code: 0, message: '获取数据失败'}});
      return;
    } else {
      res.json({result: {code: 1, words}});
    }
  });
});

router.post('/words', function(req, res, next) {
  jsonfile.readFile(config.wordsPath + 'words.json', function (err, words) {
    if (err) {
      res.json({result: {code: 0, message: '获取数据失败'}});
      return;
    } else {
      res.json({result: {code: 1, words}});
    }
  });
});

router.get('/homework/:id', function(req, res, next) {
  const id = req.params.id;
  var filePath = config.homeworkPath + '/lesson' + id + '.json';
  console.log(filePath);

  jsonfile.readFile(filePath, function (err, homeworks) {
    if (err) {
      res.json({result: {code: 0, message: '获取数据失败'}});
    } else {
      res.json({result: {code: 1, homeworks}});
    }
  });
});

router.post('/homework/:id', function(req, res, next) {
  const id = req.params.id;
  var filePath = config.homeworkPath + '/lesson' + id + '.json';
  console.log(filePath);

  jsonfile.readFile(filePath, function (err, homeworks) {
    if (err) {
      res.json({result: {code: 0, message: '获取数据失败'}});
    } else {
      res.json({result: {code: 1, homeworks}});
    }
  });
});

module.exports = router;
