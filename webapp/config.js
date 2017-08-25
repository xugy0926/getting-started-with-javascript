var path = require('path');

var config = {
  wordsFilePath: path.join(__dirname, 'public/content/catelog.json'),
  wordsFilePath: path.join(__dirname, 'public/content/words.json'),
  homeworkPath: path.join(__dirname, '/public/content/homework/')
};

module.exports = config;