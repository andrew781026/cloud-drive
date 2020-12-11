const fs = require('fs');

const s1 = fs.readFileSync('C:/Users/andrew/Downloads/two-sum-tree.png','base64');
const s2 = fs.readFileSync('D:/test/cloud-drive/express/two-sum-tree.png','base64');

console.log('s1=',s1);
console.log('s2=',s2);
console.log('s1===s2 =>',s1 === s2);
