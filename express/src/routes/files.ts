const path = require('path');
const router = require('express').Router();
const formidable = require('formidable');
const errorWrapper = require('../utils/errorWrapper');
const fileUtils = require('../utils/fileUtils');

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

router.post('/upload/bytes', (req, res) => {
    const {bytes, fileName} = req.body

    const fs = require('fs');

    const byteArray = Uint8Array.from(Object.values(bytes));
    fs.writeFileSync('./' + fileName, byteArray, {flag: 'a'});

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
