// graphql-clients - 參考資料 : https://graphql.org/graphql-js/graphql-clients/

// you can use get your graphql data over http.post
// see more on : https://graphql.org/graphql-js/graphql-clients/

import DomainCommon from '../../api/common';

const FileService = {

    listFiles: function (directory) {
        return new Promise((resolve, reject) => {
            return DomainCommon.fetchPost({
                url: `http://localhost:4000/`,
                jsonBody: {
                    query: `{
                        files(directory: "${directory}") {
                            name,
                            size,
                            createTime,
                            modifyTime,
                            isDirectory,
                            isFile,
                            isSymbolicLink,
                        }
                    }`
                },
                resolve, reject
            });
        });
    },

    addFile: function ({filePath,base64String}) {
        return new Promise((resolve, reject) => {
            return DomainCommon.fetchPost({
                url: `http://localhost:4000/`,
                jsonBody: {
                    mutation: `{
                        addFile(filePath:"${filePath}",base64String:"${base64String}")
                    }`
                },
                resolve, reject
            });
        });
    },

};

export default FileService;