import _ from 'lodash';
import path from 'path';
import run from './run';
import clean from './clean';
import scan from './scan';
import { writeFile, copyFile } from './fs';
import jsonfile from 'jsonfile';

const wordsFilePath = './output/words.json';
const errorFilePath = './output/error.json';

async function buildJsonFile(jsonFiles) {
  var goodList = [];
  var errorList = [];

  for (var i = 0; i < jsonFiles.length; i++) {
    try {
      let json = jsonfile.readFileSync('../' + jsonFiles[i]);
      goodList.push(json);
    } catch (err) {
      errorList.push(jsonFiles[i]);
    }
  }

  return new Promise(function(resolve, reject) {
    jsonfile.writeFile(wordsFilePath, goodList, {spaces: 2}, function(err) {
      if (err) {
        reject('write good json error.');
      } else {
        jsonfile.writeFile(errorFilePath, errorList, {spaces: 2}, function(err) {
          if(err) {
            reject('write error json error.');
          } else {
            resolve();
          }
        });
      }
    });
  });
}

async function start() {
  try {
    let files = await run(scan, path.join(__dirname, '../'));

    let jsonFiles = files.map(item => {
      if (item.includes('.json')) {
        return item;
      }
    });

    await buildJsonFile(jsonFiles);
  } catch (err) {
    console.log(err);
  }
}

export default start;