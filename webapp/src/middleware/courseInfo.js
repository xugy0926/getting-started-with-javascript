import _ from 'lodash';

import { apiUrl } from '../config';
import { get } from '../request';

export default async function(req, res, next) {
  try {
    let result = await get({
      url: `${apiUrl}/learnJS/course/1/detail`
    });

    _.extend(req.app.locals, result.courseInfo);
  } catch (err) {
    next(err);
    return;
  }

  next();
}
