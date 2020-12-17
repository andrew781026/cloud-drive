import queryString from "query-string";

let apiToken;
// let currentLocale = "zh-tw";
let localStorage = window.localStorage;

class DomainCommon {

    static fetchGet({url, params, resolve, reject, timeout = undefined}) {

        return _fetch({url, resolve, reject, method: 'GET', params, timeout});
    }

    static fetchPost({url, params, jsonBody, resolve, reject, timeout = undefined}) {

        return _fetch({url, resolve, reject, method: 'POST', params, data: jsonBody, timeout});
    }

    static fetchPut({url, params, jsonBody, resolve, reject, timeout = undefined}) {

        return _fetch({url, resolve, reject, method: 'PUT', params, data: jsonBody, timeout});
    }

    static fetchPatch({url, params, jsonBody, resolve, reject, timeout = undefined}) {

        return _fetch({url, resolve, reject, method: 'PATCH', params, data: jsonBody, timeout});
    }

    static fetchDelete({url, params, jsonBody, resolve, reject, timeout = undefined}) {

        return _fetch({url, resolve, reject, method: 'DELETE', params, data: jsonBody, timeout});
    }

    static getApiUrl() {
        return 'http://localhost:3011';
    }

    static setAPIToken(accessToken = undefined) {
        apiToken = accessToken;
        localStorage.setItem('accessToken', accessToken);
    }

    static clearAPIToken() {
        apiToken = undefined;
        localStorage.removeItem("accessToken");
    }

    static getAPIToken() {
        return apiToken;
    }

}

async function _fetch({url, method, params, data, optionHeaders = {}, resolve, reject}) {

    let options = method ? {method} : {};
    options = data ?
        Object.assign(options, {body: JSON.stringify(data)}) :
        options;

    // set apiTokenHeader if available
    options.headers = {
        ...optionHeaders,
        ...getApiTokenHeader(),
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    };

    try {

        const stringifyStr = queryString.stringify(params); //=> 'foo=unicorn&like=pizza'
        const tempUrl = params ? `${url}?${stringifyStr}` : url;

        let response = await fetch(tempUrl, options);

        if (check2XXStatus(response.status)) {
            if (response.status === 204) {
                resolve({});
            } else {
                try {
                    let responseJson = await response.json();
                    resolve(responseJson);

                } catch (e) {
                    // avoid response data can't serialization to json
                    console.error(e);
                    reject(e);
                }
            }
        } else {
            try {
                let responseJson = await response.json();
                reject({...responseJson, status: response.status});
            } catch (e) {
                // avoid response data can't serialization to json
                console.error(e);
                reject({status: response.status, response});
            }
        }
    } catch (e) {
        console.error(e);
        reject(e);
    }
}

function check2XXStatus(status) {
    return status >= 200 && status < 300;
}

function getApiTokenHeader() {
    return {Authorization: apiToken};
}

export default DomainCommon;
