const DomainCommon = require('./common');

const FileService = {

    // 取得所有檔案
    listFile: function (directory) {
        return DomainCommon.fetchGet({
            url: `${DomainCommon.getApiUrl()}/file/list`,
            params: {directory},
        });
    },

    // 設定根目錄
    setRootPath: function (rootPath) {
        return DomainCommon.fetchPut({
            url: `${DomainCommon.getApiUrl()}/file/rootPath`,
            jsonBody: {rootPath},
        });
    },

    // 取得根目錄
    getRootPath: function () {
        return DomainCommon.fetchGet({
            url: `${DomainCommon.getApiUrl()}/file/rootPath`,
        });
    },

};

module.exports = FileService;
