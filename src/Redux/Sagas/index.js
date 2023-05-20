import { all } from 'redux-saga/effects';
import homeSaga from './HomeSaga';

//Main Root Saga
const rootSaga = function* rootSaga() {
    yield all([homeSaga()]);
};
export default rootSaga;
