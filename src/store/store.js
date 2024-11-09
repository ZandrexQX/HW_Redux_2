import {configureStore} from "@reduxjs/toolkit";
import {thunk} from 'redux-thunk'; // необязательно
import createSagaMiddleware from 'redux-saga';
import {loggerMiddleware, middlewareLog} from "../middlewares";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootSaga from "../sagas";
import rootReducer from "../reducer/todosReducer";

// Redux-Saga
const sagaMiddleware = createSagaMiddleware();

// Config
const persistConfig = {
    key: 'root',
    storage,
}

//Reducer for persist
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Хранилище задач
const store = configureStore({
    reducer: {
        todos: persistedReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: ['persist/PERSIST'],
            }
        }).concat(thunk, sagaMiddleware, middlewareLog, loggerMiddleware),
});

sagaMiddleware.run(rootSaga);

export let persistor = persistStore(store);

export default store;