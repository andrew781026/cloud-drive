const fs = require('fs');

const file = fs.readFileSync('./big-file2.txt');
let txt = file.toString();

for (let i = 0; i < 100; i++) {
    fs.writeFileSync('./big-file2.txt', txt, {flag: 'a'});
}
