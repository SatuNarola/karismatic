// // --------------- LIBRARIES ---------------
import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { persistStore, persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-community/async-storage";
import logger from "redux-logger";

// // --------------- ASSETS ---------------
import rootReducer from "./Reducers";
import rootSaga from "./Sagas";

// Root reducer with persist config
const reducers = persistReducer(
    {
        key: "root",
        storage: AsyncStorage,
        whitelist: ["Home", "Common"],
    },
    rootReducer,
);

// Middlewares setup
const sagaMiddleware = createSagaMiddleware();
const middlewares = [];
if (__DEV__) {
    // middlewares.push(sagaMiddleware, logger); // With logger
    middlewares.push(sagaMiddleware); // without logger
} else {
    middlewares.push(sagaMiddleware); // without logger
}

// Create store ----->>>>>
export const Store = configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware({
            immutableCheck: false,
            serializableCheck: false,
        }).concat(...middlewares);
    },
});

// PersistStore contains all the data from store ----->>>>>
export const Persistor = persistStore(Store);
sagaMiddleware.run(rootSaga); // Run Saga
