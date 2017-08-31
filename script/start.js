import _ from 'lodash';
import path from 'path';
import run from './run';
import clean from './clean';
import scan from './scan';
import { writeFile, copyFile } from './fs';
import jsonfile from 'jsonfile';
import request from 'superagent';

var host = process.env.host || 'localhost:3001';

const lessonPath = '../homework/';
const lesson2PathStr = '../homework/lesson2';
const urlPre = 'https://github.com/xugy0926/getting-started-with-javascript/tree/master/homework/';

async function lesson(type) {
  let files = await run(scan, lessonPath + type);
  let jsonFilePath = 'result/' + type + '.json';

  let homeworkInfo = [];
  files.forEach(item => {
    homeworkInfo.push({name: item.replace('.md', ''), url: urlPre + type + '/' + item});
  });

  return new Promise(function(resolve, reject) {
    jsonfile.writeFile(jsonFilePath, homeworkInfo, {spaces: 2}, function(err) {
      if (err) {
        reject('write json error.');
      } else {
        resolve(homeworkInfo);
      }
    });
  });
}

async function start() {
  await run(clean);
  for (var i = 0; i < 6; i++) {
    try {
      let homeworkInfo = await lesson('lesson' + (i + 1));

      let result = await request
        .put(`${host}/api/v1/learnJS/course/1/homework/${i+1}`)
        .send({homeworkInfo: homeworkInfo}) // sends a JSON post body
        .set('X-API-Key', 'foobar')
        .set('Accept', 'application/json')
      console.log(result.text);
    } catch (err) {
      console.log(err);
    }
  }
}

export default start;