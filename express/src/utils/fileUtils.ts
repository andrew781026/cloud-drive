/**
 * 此檔案需要完成的功能 -
 *
 *   1. 監控某檔案的變化 ?
 *   2. 取得某資料夾中所有的檔案列表
 *   3. 取得檔案的詳細資訊 ( 檔名 . 建立時間 . 修改時間 . 類型 . 檔案大小 . 標籤 . 作者 )
 *   4. 設定 pin 參數到檔案的標籤上面 => 無法修改檔案上的屬性
 *
 * */
import * as fs from 'fs';
import * as path from 'path';

interface StatsFormatterOutput extends fs.Stats {
    name: string;
    size: number,             // 檔案大小 (bytes)
    filePath?: string,         // 檔案絕對位置
    relativePath?: string,     // 檔案相對位置
    fileType: string,
    createTime: Date,         // 建立時間
    modifyTime: Date,         // 修改時間
    isDirectory(): boolean,     // 是否為資料夾
    isFile(): boolean,          // 是否為檔案
    isSymbolicLink(): boolean,  // 是否為捷徑
}

interface StatsFormatterInput {
    stats: fs.Stats;
    name: string;
    filePath: string;
    relativePath?: string;
}

type StatsFormatterFn = ({stats, name, filePath, relativePath}: StatsFormatterInput) => StatsFormatterOutput;
const statsFormatter: StatsFormatterFn = ({stats, name, filePath, relativePath}) => ({

    ...stats,
    filePath,
    relativePath,
    name,                                     // 檔名
    size: stats.size,                         // 檔案大小 (bytes)
    createTime: stats.birthtime,              // 建立時間
    modifyTime: stats.mtime,                  // 修改時間
    fileType: stats.isDirectory() ? 'isDirectory' : (stats.isFile() ? 'isFile' : 'isSymbolicLink'),
})

// 取得檔案資訊
const getFileInfo = (filePath: string): StatsFormatterOutput => {

    const stats = fs.lstatSync(filePath);

    return statsFormatter({
        stats,
        name: path.basename(filePath),
        filePath
    });
};

// 取得某資料夾中所有的檔案列表
const listFiles = (directory: string, rootPath: string): StatsFormatterOutput[] => {

    const dir = `${rootPath}/${directory}`;

    // 參考資料 : https://stackabuse.com/node-list-files-in-a-directory/
    return fs.readdirSync(dir).map(file => {

        const filePath = path.resolve(dir, file);
        const stats = fs.lstatSync(filePath);
        const relativePath = path.relative(rootPath, filePath);

        return statsFormatter({
            stats,
            name: file,
            filePath,
            relativePath
        });
    });
};

// 將 base64 存成新的檔案
const saveBase64Str = (filePath, base64Str) => {

    // Remove header
    const data = base64Str.split(';base64,').pop();

    return fs.writeFileSync(filePath, data, {encoding: 'base64'});
};

const saveByteArray = ({filePath, byteArray}) => {

    return fs.writeFileSync(filePath, byteArray);
}

const saveToLocalFile = ({filePath, base64Str}) => {

    // 利用不同的參數 . 使用不同的 function

    return saveBase64Str(filePath, base64Str);
};

/**
 *
 * 由 http 過來時 , 儲存檔案的方式有
 *   1. 傳輸 base64 資訊過來
 *   2. 利用 Form 表單傳輸檔案過來 ( 單個檔案 )
 *   3. 利用 Form 表單傳輸檔案過來 ( 許多個檔案 )
 *   4. 大檔案慢慢上傳 ? ( https://github.com/muxinc/upchunk ) 使用 upchunk 上傳大檔案
 *
 *   => 在 graphQL 中要如何實作 ?
 *
 * */

const FileUtils = {

    getFileInfo,
    saveToLocalFile,
    listFiles,
    saveByteArray,
};

module.exports = FileUtils;
