const path = require('path');
const router = require('express').Router();
const formidable = require('formidable');
const errorWrapper = require('../utils/errorWrapper');
const fileUtils = require('../utils/fileUtils');
const fs = require('fs');

const rootPath = __dirname;

router.get('/', (req, res) => {
    res.send(`
    <h2>With <code>"express"</code> npm package</h2>
    <form action="/file/upload" enctype="multipart/form-data" method="post">
      <div>Text field title: <input type="text" name="title" /></div>
      <div>File: <input type="file" name="someExpressFiles" multiple="multiple" /></div>
      <input type="submit" value="Upload" />
    </form>
  `);
});

router.get('/exist', (req, res) => {
    const {fileName} = req.body

    // 確認檔案是否存在
    const exist = fs.existsSync(`./upload/${fileName}`);
    res.json({exist})
});

router.post('/upload/bytes', (req, res) => {
    const {bytes, fileName} = req.body

    const filePath = `./upload/${fileName}`;

    const byteArray = Uint8Array.from(Object.values(bytes));
    fs.writeFileSync(filePath, byteArray, {flag: 'a'});
    res.json({bytes})
});

router.post('/upload', (req, res, next) => {
    const form = formidable({multiples: true});

    // get the upload files
    form.parse(req, (err, fields, files) => {
        if (err) {
            next(err);
            return;
        }
        res.json({fields, files});
    });
});

module.exports = router;
