import express from 'express';
import { apiUrl } from '../config';
import { get } from '../request';

var router = express.Router();

router.get('/list', async function(req, res, next) {

  try {
    let homeworkInfoResult = await get({
      url: `${apiUrl}/learnJS/course/1/homework`
    });

    res.render('homeworkList', { homeworkInfoList: homeworkInfoResult.homeworkInfo, });
  } catch (err) {
    next(err);
  }
});

module.exports = router;

router.get('/detail/:number', async function(req, res, next) {
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
