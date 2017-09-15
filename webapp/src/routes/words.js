import express from 'express';
import config from '../config';
import jsonfile from 'jsonfile';

var router = express.Router();

/* GET words listing. */
router.get('/', function(req, res, next) {
  jsonfile.readFile(config.wordsFilePath, function(err, words) {
    if (err) {
      next();
    } else {
      res.render('words', { title: '我的心里话', words });
    }
  });
});

module.exports = router;
