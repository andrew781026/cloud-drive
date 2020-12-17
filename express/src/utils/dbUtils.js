import fs from "fs";
import low from 'lowdb'; // json db
import FileSync from 'lowdb/adapters/FileSync';
import path from "path";

// let globalDB; // globalDB 會再開啟 APP 後載入

const createFileIfNotExist = targetPath => {

    if (fs.existsSync(targetPath)) return 'file db.json already exist';
    else {

        if (!fs.existsSync(path.resolve(targetPath, '..'))) {
            fs.mkdirSync(path.resolve(targetPath, '..'), {recursive: true});
        }

        fs.writeFileSync(targetPath, '');
        return 'success create file db.json';
    }
};

class DbUtils {

    static globalDB;

    static setGlobalDB = db => DbUtils.globalDB = db;

    static getGlobalDB = () => DbUtils.globalDB;

    static setRootPath = rootPath => DbUtils.globalDB.set('rootPath', rootPath).write();

    static getRootPath = () => DbUtils.globalDB.get('rootPath');

    static getDataBase = ({filePath, defaultJson = {}}) => {

        if (fs.existsSync(filePath)) {

            const adapter = new FileSync(filePath);
            return low(adapter);

        } else {

            createFileIfNotExist(filePath);
            const adapter = new FileSync(filePath);
            const db = low(adapter);

            // Set some defaults (required if your JSON file is empty)
            db.defaults(defaultJson).write();

            return db;
        }
    };
}


export default DbUtils;