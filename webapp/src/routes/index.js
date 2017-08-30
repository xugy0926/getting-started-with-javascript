import express from 'express';
import { apiUrl } from '../config';
import { get } from '../request';

var router = express.Router();

/* GET home page. */
router.get('/', async function(req, res, next) {
  try {
    let homeworkInfoResult = await get({
      url: `${apiUrl}/learnJS/course/1/homework`
    });
    let catelogResult = await get({
      url: `${apiUrl}/learnJS/course/1/catelog`
    });

    res.render('index', {
      homeworkInfoList: homeworkInfoResult.homeworkInfo,
      gitTopicsList: catelogResult.catelog.gitTopicsList,
      pptList: catelogResult.catelog.pptList,
      topicsList: catelogResult.catelog.topicsList
    });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
