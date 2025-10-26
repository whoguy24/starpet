// Import Modules
import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import rootReducer from './reducers/_root.reducer';
import rootSaga from './sagas/_root.saga';

// Define Middleware
const sagaMiddleware = createSagaMiddleware();
const middlewareList = import.meta.env.VITE_APPLICATION_ENVIRONMENT === 'development' ? [sagaMiddleware, logger] : [sagaMiddleware];

// Initialize Redux Store
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(middlewareList),
  devTools: import.meta.env.VITE_APPLICATION_ENVIRONMENT === 'development',
});

// Initialize Sage Middleware
sagaMiddleware.run(rootSaga);

// Export Redux Store
export default store;