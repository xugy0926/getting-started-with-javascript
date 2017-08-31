import express from 'express';
import { apiUrl } from '../config';
import { get } from '../request';

var router = express.Router();

/* GET words listing. */
router.get('/', async function(req, res, next) {
  try {
    let result = await get({
      url: `${apiUrl}/learnJS/course/1/words`
    });

    res.render('words', {
      title: '我的心裡話',
      words: result.words
    });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
