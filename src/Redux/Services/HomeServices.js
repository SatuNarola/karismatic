import { Constant } from '../../CommonConfig';
import { Tools } from '../../Helper';
import Ajax from './base';

export default {
    GetProducts: () => {
        if (global.isConnected) {
            return fetch('http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline')
                .then((response) => Ajax.handleResponse(response))
                .then((data) => {
                    return data;
                });
        } else {
            return Promise.reject({ message: Constant.NO_INTERNET_MESSAGE });
        }
    },
};
