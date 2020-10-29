/**
 * 此檔案需要完成的功能 -
 *
 *   1. 監控某檔案的變化 ?
 *   2. 取得某資料夾中所有的檔案列表
 *   3. 取得檔案的詳細資訊 ( 檔名 . 建立時間 . 修改時間 . 類型 . 檔案大小 . 標籤 . 作者 )
 *
 * */

const fs = require('fs');
const path = require('path');

const statsFormatter = ({stats, name}) => ({

    ...stats,
    name,                                     // 檔名
    size: stats.size,                         // 檔案大小
    createTime: stats.birthtime,              // 建立時間
    modifyTime: stats.mtime,                  // 修改時間
    isDirectory: stats.isDirectory(),         // 是否為資料夾
    isFile: stats.isFile(),                   // 是否為檔案
    isSymbolicLink: stats.isSymbolicLink(),   // 是否為捷徑
})

const getFileInfo = filePath => {

    const stats = fs.lstatSync(filePath);

    return statsFormatter({
        stats,
        name: path.basename(filePath)
    });
};

// 取得某資料夾中所有的檔案列表
const listFileInTargetDirectory = directory => {

    // 參考資料 : https://stackabuse.com/node-list-files-in-a-directory/
    return fs.readdirSync(directory).map(file => {

        const filePath = path.resolve(directory, file);
        const stats = fs.lstatSync(filePath);

        return statsFormatter({
            stats,
            name: file,
        });
    });
};


module.exports = {
    getFileInfo,
    listFileInTargetDirectory,
};