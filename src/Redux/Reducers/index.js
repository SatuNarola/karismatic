import { combineReducers } from 'redux';

import HomeReducer from './HomeReducer';
import CommonReducer, { INITIAL_STATE as INITIAL_COMMON } from './CommonReducer';

let appReducer = combineReducers({
    Home: HomeReducer,
    Common: CommonReducer
});

const rootReducer = (state, action) => {
    return appReducer(state, action);
};

export default rootReducer;
