var fs = require('fs');
fs.writeFileSync((__dirname)+'/fileNameCollection.txt', fs.readdirSync(__dirname));