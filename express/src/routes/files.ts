const path = require('path');
const router = require('express').Router();
const formidable = require('formidable');
const errorWrapper = require('../utils/errorWrapper');
const fileUtils = require('../utils/fileUtils');
const fs = require('fs');

// 回傳 formidable 測試用的表單
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

// 確認檔案是否存在
router.get('/exist', (req, res) => {
    const {fileName} = req.body

    // 確認檔案是否存在
    const exist = fs.existsSync(`./upload/${fileName}`);
    res.json({exist})
});

// 將檔案 slice 後分區塊上傳
router.post('/upload/bytes', (req, res) => {
    const {bytes, fileName} = req.body

    const filePath = `./upload/${fileName}`;

    const byteArray = Uint8Array.from(Object.values(bytes));
    fs.writeFileSync(filePath, byteArray, {flag: 'a'});
    res.json({bytes})
});

// 將檔案放在表單中 , 一併做傳送
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

let rootPath = 'D:\\test';

// 設定根目錄
router.put('/rootPath', (req, res) => {

    rootPath = req.body.rootPath;

    res.json({status: '200', msg: '成功設定 rootPath'})
});

router.get('/rootPath', (req, res) => {

    res.json(rootPath)
});

router.get('/list', (req, res) => {

    const directory = req.query.directory || '';
    console.log('directory=', directory);

    const files = fileUtils.listFiles(directory, rootPath);

    res.json(files);
});


module.exports = router;
