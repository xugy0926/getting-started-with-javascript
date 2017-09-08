var request = require('superagent');
var jsonfile = require('jsonfile');

const wordsFilePath = './output/words.json';

let json = jsonfile.readFileSync(wordsFilePath);

let host = process.env.host || 'https://js.xinshengdaxue.com';

request
  .put(`${host}/api/v1/learnJS/course/1/words`)
  .send({words: json}) // sends a JSON post body
  .set('X-API-Key', 'foobar')
  .set('Accept', 'application/json')
  .end(function(err, res){
    if (err) {
      console.log(err);
    } else {
      console.log('success!!');
    }
  });