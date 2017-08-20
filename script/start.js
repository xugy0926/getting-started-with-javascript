import _ from 'lodash';
import path from 'path';
import run from './run';
import clean from './clean';
import scan from './scan';
import { writeFile, copyFile } from './fs';
import jsonfile from 'jsonfile';

const lessonPath = '../homework/';
const lesson2PathStr = '../homework/lesson2';
const urlPre = 'https://github.com/xugy0926/getting-started-with-javascript/tree/master/homework/';

async function lesson(type) {
  let files = await run(scan, lessonPath + type);
  let jsonFilePath = 'result/' + type + '.json';

  let lessonInfo = [];
  files.forEach(item => {
    lessonInfo.push({name: item.replace('.md', ''), url: urlPre + type + '/' + item});
  });

  return new Promise(function(resolve, reject) {
    jsonfile.writeFile(jsonFilePath, lessonInfo, {spaces: 2}, function(err) {
      if (err) {
        reject('write json error.');
      } else {
        resolve(jsonFilePath);
      }
    });
  });
}

async function start() {
  try {
    await run(clean);
    let lesson1Path = await lesson('lesson1');
    await copyFile(lesson1Path, path.join(__dirname, '../webapp/public/content/homework/lesson1.json'));

    let lesson2Path = await lesson('lesson2');
    await copyFile(lesson2Path, path.join(__dirname, '../webapp/public/content/homework/lesson2.json'));
  } catch (err) {
    console.log(err);
  }
}

export default start;