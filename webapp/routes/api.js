var fs = require('fs');
var path = require('path');
var jsonfile = require('jsonfile');
var express = require('express');
var config = require('../config');

var router = express.Router();
var catelog = require('../public/content/catelog');

// catelog
router.get('/catelog/list', function(req, res, next) {
  res.json({result: {code: 1, catelog}});
});

router.post('/catelog/list', function(req, res, next) {
  res.json({result: {code: 1, catelog}});
});

router.post('/catelog/update', function(req, res, next) {
  var catelog = req.body.catelog;
  // TODO: 不用数据库，该如何对文章分类呢？
});

router.get('/words/list', function(req, res, next) {
  jsonfile.readFile(config.wordsFilePath, function (err, words) {
    if (err) {
      res.json({result: {code: 0, message: '获取数据失败'}});
      return;
    } else {
      res.json({result: {code: 1, words}});
    }
  });
});

router.post('/words/list', function(req, res, next) {
  jsonfile.readFile(config.wordsFilePath, function (err, words) {
    if (err) {
      res.json({result: {code: 0, message: '获取数据失败'}});
      return;
    } else {
      res.json({result: {code: 1, words}});
    }
  });
});

router.post('/words/update', function(req, res, next) {
  const words = req.body.words;

  fs.unlinkSync(config.wordsFilePath);

  jsonfile.writeFile(config.wordsFilePath, words, {spaces: 2}, function(err) {
    if (err) {
      res.json({result: {code: 0, message: '更新失败'}});
    } else {
      res.json({result: {code: 1, message: '更新成功'}});
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
