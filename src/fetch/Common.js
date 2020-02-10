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
        // ...getApiTokenHeader(),
        mode: 'no-cors',
        'Access-Control-Allow-Origin': '*',
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        // 'Accept-Language': getDefaultLanguage() // currentLocale,
    };

    // console.log('apiToken=', apiToken);
    // console.log('options=', options);

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

                    // if response.body.status out of 2XX , API validate value failed ( ex: data already have )
                    if (responseJson && !check2XXStatus(responseJson.status)) reject(responseJson);
                    else resolve(responseJson);

                } catch (e) {
                    console.error(e);

                    reject(e);
                }
            }
        } else {
            try {
                let responseJson = await response.json();
                if (responseJson.status === 401) {
                    // redirect to login page
                    // eventEmitter.emit('API-401');
                    reject({...responseJson, status: response.status});
                } else reject({...responseJson, status: response.status});
            } catch (e) {
                //avoid response data can't serialization to json
                console.error(e);
                reject({status: response.status});
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
    return {Authorization: apiToken && `Bearer ${apiToken}`};
}

export default DomainCommon;
