import request from 'superagent';

export async function get({ url, query }) {
  try {
    let result = await request
      .get(url)
      .query(query)
      .set('Accept', 'application/json');
    
    result = result.body;

    if (!result || !result.code) {
      throw new Error(result ? result.message : '发生错误');
    }

    return Promise.resolve(result);
  } catch (err) {
    return Promise.reject(err);
  }
}

export async function post({ url, body }) {
  try {
    let result = await request
      .post(url)
      .send(body)
      .set('X-API-Key', 'foobar')
      .set('Accept', 'application/json');
    
    result = result.body;

    if (!result || !result.code) {
      throw new Error(result ? result.message : '发生错误');
    }
    
    return Promise.resolve(result);
  } catch (err) {
    return Promise.reject(err);
  }
}
