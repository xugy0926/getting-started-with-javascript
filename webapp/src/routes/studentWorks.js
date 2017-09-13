import express from 'express';
import { apiUrl } from '../config';
import { get, post, put } from '../request';

var router = express.Router();

router.get('/', async function(req, res) {
  res.render('studentWorks');
});

router.get('/list', async function(req, res) {
  try {
    let result = await get({
      url: `${apiUrl}/learnJS/course/1/studentWorks`
    });

    res.json(result);
  } catch (err) {
    res.json({ code: 0, message: err.message });
  }
});

router.post('/add', async function(req, res) {
  let { name, account, url, member, description } = req.body;
  
  try {
    if (!name || !account || !url) {
      throw new Error('数据错误');
    }

    let result = await post({
      url: `${apiUrl}/learnJS/course/1/studentWorks`,
      body: { name, account, url, member, description }
    });

    res.json(result);
  } catch (err) {
    res.json({ code: 0, message: err.message });
  }
});

module.exports = router;
