import express from 'express';
import { apiUrl } from '../config';
import { get } from '../request';

var router = express.Router();

/* GET homework page. */
router.get('/:number', async function(req, res, next) {
  const number = req.params.number;

  try {
    let result = await get({
      url: `${apiUrl}/learnJS/course/1/homework/${number}`
    });

    res.render('homework', { title: '第' + number + '次作业', homeworks: result.homeworks });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
