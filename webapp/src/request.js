import request from 'superagent';

export async function get({ url, query }) {
  try {
    let result = await request
      .get(url)
      .query(query)
      .set('Accept', 'application/json');

    return Promise.resolve(result.body.result);
  } catch (err) {
    return Promise.reject(err);
  }
}
