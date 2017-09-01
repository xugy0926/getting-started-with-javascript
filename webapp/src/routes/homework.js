import express from 'express';
import { apiUrl } from '../config';
import { get } from '../request';

var router = express.Router();

/* GET homework page. */
router.get('/:id', async function(req, res, next) {
  const id = req.params.id;

  try {
    let result = await get({
      url: `${apiUrl}/learnJS/course/${id}/homework/${id}`
    });

    res.render('homework', { title: '第' + id + '次作业', homeworks: result.homeworks });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
