import { createStore, applyMiddleware } from 'redux';
import rootReducer from '@Reducers';
import thunk from 'redux-thunk';

import { middleware } from '@Navigation/reduxMiddleware'

export default function configureStore() {
  return createStore(
    rootReducer,
      applyMiddleware(thunk),
      applyMiddleware(middleware)
  );
}
