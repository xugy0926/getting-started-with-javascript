var express = require('express');
var router = express.Router();

var catelog = require('../content/catelog');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: '小白学习JS', 
    gitTopicsList: catelog.gitTopicsList, 
    pptList: catelog.pptList, 
    topicsList: catelog.topicsList });
});

module.exports = router;
