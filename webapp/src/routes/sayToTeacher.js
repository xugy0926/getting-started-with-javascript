import express from 'express';
import { apiUrl } from '../config';
import { get, post } from '../request';

var router = express.Router();

router.get('/', async function(req, res) {
  res.render('sayToTeacher');
});

router.get('/list', async function(req, res) {
  try {
    let result = await get({
      url: `${apiUrl}/learnJS/sayToMe`
    });

    res.json(result);
  } catch (err) {
    res.json({ code: 0, message: err.message });
  }
});

router.post('/add', async function(req, res) {
  let { name, account, content } = req.body;

  try {
    if (!name || !account || !content) {
      throw new Error('数据错误');
    }

    let result = await post({
      url: `${apiUrl}/learnJS/sayToMe`,
      body: { name, account, content }
    });

    res.json(result);
  } catch (err) {
    res.json({ code: 0, message: err.message });
  }
});

module.exports = router;
