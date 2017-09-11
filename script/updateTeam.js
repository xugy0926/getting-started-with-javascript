import scan from './scan';
import { readFile } from './fs';
import request from 'superagent';

var host = process.env.host || 'localhost:3001';

const filePath = './teams.md';

async function start() {
  try {
    let data = await readFile(filePath);

    let result = await request
      .put(`${host}/api/v1/learnJS/course/1/teams/`)
      .send({teamInfo: data}) // sends a JSON post body
      .set('X-API-Key', 'foobar')
      .set('Accept', 'application/json')
    console.log(result.text);
  } catch (err) {
    console.log(err);
  }
}

export default start;