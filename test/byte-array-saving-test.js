const fs = require('fs');
const data = require('./byteArray.json');

const byteArray = Uint8Array.from(Object.values(data))
fs.writeFileSync('./data.txt', byteArray, 'utf8');
const file = fs.readFileSync('./data.txt', 'utf8')
console.log('file writting success , text = \n',file.toString());
