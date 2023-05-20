// --------------- LIBRARIES ---------------
import { put, call, takeEvery, all } from 'redux-saga/effects';

// --------------- ASSETS ---------------
import { Products } from '../Types';
import { getProducts } from '../Actions';
import API from '../Services';

const getProductSaga = function* getProductSaga() {
    try {
        const response = yield call(API.Home.GetProducts);
        yield put(getProducts.Success(response));
    } catch (error) {
        console.log('ERROR IN SAGA ->', error);
        yield put(getProducts.Failed(error));
    }
};

function* homeSaga() {
    yield all([
        takeEvery(Products.REQUEST, getProductSaga),
    ]);
}

export default homeSaga;