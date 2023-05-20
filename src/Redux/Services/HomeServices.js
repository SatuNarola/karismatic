import {Constant} from '../../CommonConfig';
import { Tools } from '../../Helper';
import Ajax from './base';

export default {
    GetProducts: () => {
        if (global.isConnected) {
            return fetch(Constant.BASE_URL + 'entries', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
                .then((response) => Ajax.handleResponse(response))
                .then((data) => {
                    return data;
                });
        } else {
            return Promise.reject({ message: Constant.NO_INTERNET_MESSAGE });
        }
    },
};
