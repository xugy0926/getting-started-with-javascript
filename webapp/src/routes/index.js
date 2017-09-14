import express from 'express';
import { apiUrl } from '../config';
import { get } from '../request';
import MarkdownIt from 'markdown-it';

var router = express.Router();

var md = new MarkdownIt();

/* GET home page. */
router.get('/', async function(req, res, next) {
  try {
    let wordsResult = await get({
      url: `${apiUrl}/learnJS/course/1/words`
    });
    let teamInfoResult = await get({
      url: `${apiUrl}/learnJS/course/1/teams`
    });
    let rankingResult = await get({
      url: `${apiUrl}/learnJS/course/1/ranking`
    });

    res.render('index', {
      words: wordsResult.words,
      teamInfo: md.render(teamInfoResult.teamInfo),
      rankingInfo: rankingResult.ranking
    });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
