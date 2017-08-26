import express from 'express';
import config from '../config';
import fs from 'fs';
import jsonfile from 'jsonfile';

let router = express.Router();
let catelog = require('../public/content/catelog');

router.post('/course/1/info', function(req, res) {
  res.json({
    result: {
      code: 1,
      courseInfo: {
        title: 'JavaScript编程入门',
        teacher: '徐高阳',
        teacherAvatar:
          'https://ws1.sinaimg.cn/large/006tKfTcgy1fi7s7vo8y0j30hs0hsaay.jpg',
        startTime: '2017/08/08',
        endTime: '2017/09/10'
      }
    }
  });
});

// catelog
router.get('/catelog/list', function(req, res) {
  res.json({ result: { code: 1, catelog } });
});

router.post('/catelog/list', function(req, res) {
  res.json({ result: { code: 1, catelog } });
});

router.post('/catelog/update', function(req, res) {
  var catelog = req.body.catelog;
  // TODO: 不用数据库，该如何对文章分类呢？
});

router.get('/words/list', function(req, res) {
  jsonfile.readFile(config.wordsFilePath, function(err, words) {
    if (err) {
      res.json({ result: { code: 0, message: '获取数据失败' } });
      return;
    } else {
      res.json({ result: { code: 1, words } });
    }
  });
});

router.post('/words/list', function(req, res) {
  jsonfile.readFile(config.wordsFilePath, function(err, words) {
    if (err) {
      res.json({ result: { code: 0, message: '获取数据失败' } });
      return;
    } else {
      res.json({ result: { code: 1, words } });
    }
  });
});

router.post('/words/update', function(req, res) {
  const words = req.body.words;

  fs.unlinkSync(config.wordsFilePath);

  jsonfile.writeFile(config.wordsFilePath, words, { spaces: 2 }, function(err) {
    if (err) {
      res.json({ result: { code: 0, message: '更新失败' } });
    } else {
      res.json({ result: { code: 1, message: '更新成功' } });
    }
  });
});

router.get('/homework/:id', function(req, res) {
  const id = req.params.id;
  var filePath = config.homeworkPath + '/lesson' + id + '.json';

  jsonfile.readFile(filePath, function(err, homeworks) {
    if (err) {
      res.json({ result: { code: 0, message: '获取数据失败' } });
    } else {
      res.json({ result: { code: 1, homeworks } });
    }
  });
});

router.post('/homework/:id', function(req, res) {
  const id = req.params.id;
  var filePath = config.homeworkPath + '/lesson' + id + '.json';

  jsonfile.readFile(filePath, function(err, homeworks) {
    if (err) {
      res.json({ result: { code: 0, message: '获取数据失败' } });
    } else {
      res.json({ result: { code: 1, homeworks } });
    }
  });
});

module.exports = router;
