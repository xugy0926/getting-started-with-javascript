var fs = require('fs');
var path = require('path');
var jsonfile = require('jsonfile');
var express = require('express');
var config = require('../config');

var router = express.Router();
var catelog = require('../public/content/catelog');

/* GET home page. */
router.get('/', function(req, res, next) {

  fs.readdir(config.homeworkPath, function(err, files) {
    if (err) {
      next();
    } else {
      var homeworkInfoList = [];
      files.forEach((item, index) => {
        let file = jsonfile.readFileSync(config.homeworkPath + 'lesson' + (index + 1) + '.json');
        homeworkInfoList.push({
            url: 'homework/' + (index + 1),
            count: file.length
          });
      });
      res.render('index', {
        homeworkInfoList,
        gitTopicsList: catelog.gitTopicsList, 
        pptList: catelog.pptList, 
        topicsList: catelog.topicsList });
    }
  });

});

module.exports = router;
