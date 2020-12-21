const Axios =  require('axios');

class DomainCommon {

    static fetchGet({url, params}) {

        return Axios.get(url,{params})
    }

    static fetchPost({url, params, jsonBody}) {

        return Axios.post(url,jsonBody,{params})
    }

    static fetchPut({url, params, jsonBody}) {

        return Axios.put(url,jsonBody,{params})
    }

    static fetchPatch({url, params, jsonBody}) {

        return Axios.patch(url,jsonBody,{params})
    }

    static fetchDelete({url, params, jsonBody}) {

        return Axios.delete(url,jsonBody,{params})
    }

    static getApiUrl() {
        return 'http://localhost:3011';
    }

}

module.exports = DomainCommon;
