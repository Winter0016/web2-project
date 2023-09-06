import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import reducer from './reducer';
import rootSaga from './saga';
import { useSelector } from 'react-redux';

export const makeStore = (context) => {
  // 1: Create the middleware
  const sagaMiddleware = createSagaMiddleware();
  const middleware = [sagaMiddleware]

  let composeEnhancers = compose;

  if (typeof window !== "undefined") {
     composeEnhancers = window?.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  }
  


  // 2: Add an extra parameter for applying middleware:
  const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(middleware),
  })
  // 3: Run your sagas on server
  sagaMiddleware.run(rootSaga)
};

export const useAppSelector = useSelector;

const storeContainer = makeStore();
export default storeContainer;