import express from 'express';
import config from '../config';
import jsonfile from 'jsonfile';

var router = express.Router();

/* GET homework page. */
router.get('/:id', function(req, res, next) {
  const id = req.params.id;
  var filePath = config.homeworkPath + '/lesson' + id + '.json';

  jsonfile.readFile(filePath, function(err, homeworks) {
    if (err) {
      next();
    } else {
      res.render('homework', { title: '第' + id + '次作业', homeworks });
    }
  });
});

module.exports = router;
