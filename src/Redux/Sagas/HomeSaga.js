// --------------- LIBRARIES ---------------
import { put, call, takeEvery, all } from 'redux-saga/effects';

// --------------- ASSETS ---------------
import { Products } from '../Types';
import { getProducts } from '../Actions';
import API from '../Services';

const getProductSaga = function* getProductSaga({ params }) {
    try {
        const response = yield call(API.Home.GetProducts, params);
        if (!response?.entries) {
            throw new Error(response);
        }
        yield put(getProducts.Success(response));
    } catch (error) {
        yield put(getProducts.Failed(error));
    }
};

function* homeSaga() {
    yield all([
        takeEvery(Products.REQUEST, getProductSaga),
    ]);
}

export default homeSaga;