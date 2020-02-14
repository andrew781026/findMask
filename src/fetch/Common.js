import Axios from "axios";

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

}

// timeout 預設為 3 秒
async function _fetch({headers = {}, url, params, data, method, timeout = 3 * 1000, baseURL = 'http://localhost:8009', resolve, reject}) {
    try {

        const isUrlAll = url.startsWith("http");

        let response = await Axios({
            method,
            url,
            baseURL: isUrlAll ? undefined : baseURL,
            headers,
            params,  // params is the data at query string
            data,   // data is the data at request body
            timeout
        });

        if (response.status === 204) // 204 No Content , 參考網址 : https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Status/204
            resolve({});
        else {
            try {
                let responseJson = await response.data; // the response body is response.data
                resolve(responseJson);

            } catch (e) {
                resolve({});
            }
        }

    } catch (e) {

        // Axios get error when response.status out of the range of 2xx
        reject(e);
    }
}

export default DomainCommon;
