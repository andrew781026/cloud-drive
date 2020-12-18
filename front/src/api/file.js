import DomainCommon from './common';

const FileService = {

    // 取得所有檔案
    listFile: function (directory) {
        return new Promise((resolve, reject) => {
            return DomainCommon.fetchGet({
                url: `${DomainCommon.getApiUrl()}/file/list`,
                params: {directory},
                resolve, reject
            });
        });
    },

    // 設定根目錄
    setRootPath: function (rootPath) {
        return new Promise((resolve, reject) => {
            return DomainCommon.fetchPut({
                url: `${DomainCommon.getApiUrl()}/file/rootPath`,
                jsonBody: {rootPath},
                resolve, reject
            });
        });
    },

};

export default FileService;
