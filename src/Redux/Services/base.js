import { Constant } from '../../CommonConfig';

const POST = 'post';
const GET = 'get'; ``
const PUT = 'put';
const PATCH = 'patch';
const DELETE = 'delete';

const handleResponse = (response) => {
    // if (!response.ok) {
    //     return Promise.reject(response);
    // }
    const contentType = response.headers.get('Content-Type');
    if (contentType && contentType.indexOf('application/json') !== -1) {
        return response.json();
    } else {
        return response.text();
    }
};

const Request = async (route, method, payload, formData, priv = true) => {
    let config = priv
        ? {
            method: method,
            headers: {
                Accept: 'application/json',
                'x-access-token': global.accesskey,
                guid: global.guid,
                device_type: Constant.DEVICE_TYPE,
            },
        }
        : {
            method: method,
            headers: {
                Accept: 'application/json',
                accesskey: 'nousername',
                secretkey: global.secretkey,
                device_type: Constant.DEVICE_TYPE,
            },
        };
    if (payload) {
        config = {
            ...config,
            headers: {
                ...config.headers,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        };
    }
    if (formData) {
        config = {
            ...config,
            body: formData,
        };
    }
    return fetch(route, config).then((res) => handleResponse(res));
};

export default {
    Request,
    handleResponse,
    POST,
    PUT,
    PATCH,
    GET,
    DELETE,
};
