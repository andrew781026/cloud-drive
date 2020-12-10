const fs = require('fs');

const filename = 'IR-1-HR-004-B 應徵人員資料卡_2020-12-10.doc';


for (let i = 0; i < 8; i++) {

    const file = fs.readFileSync('./big-file2.txt');
    let txt = file.toString();
    fs.writeFileSync(filename, txt, {flag: 'a'});
}
