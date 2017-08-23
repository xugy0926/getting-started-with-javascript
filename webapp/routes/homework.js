var express = require('express');
var path = require('path');
var jsonfile = require('jsonfile');
var config = require('../config');

var router = express.Router();

/* GET homework page. */
router.get('/:id', function(req, res, next) {
  const id = req.params.id;
  var filePath = config.homeworkPath + '/lesson' + id + '.json';
  console.log(filePath);

  jsonfile.readFile(filePath, function (err, homeworks) {
    if (err) {
      next();
    } else {
      res.render('homework', {title: '第' + id + '次作业', homeworks});
    }
  });
});

module.exports = router;
