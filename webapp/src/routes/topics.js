import express from 'express';
import { apiUrl } from '../config';
import { get } from '../request';
import MarkdownIt from 'markdown-it';

var router = express.Router();

var md = new MarkdownIt();

/* GET home page. */
router.get('/', async function(req, res, next) {
  try {
    let catelogResult = await get({
      url: `${apiUrl}/learnJS/course/1/catelog`
    });

    res.render('topics', {
      gitTopicsList: catelogResult.catelog.gitTopicsList,
      pptList: catelogResult.catelog.pptList,
      topicsList: catelogResult.catelog.topicsList
    });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
