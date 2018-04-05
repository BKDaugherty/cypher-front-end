import { createStore, applyMiddleware } from 'redux';
import rootReducer from '@Reducers';
import thunk from 'redux-thunk';
import { middleware } from '@Navigation/reduxMiddleware'

//Persistence!
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

const persistConfig = {
  key: 'root',
  storage: storage,
  stateReconciler: autoMergeLevel2
 };
 

export const store = createStore(persistReducer(persistConfig, rootReducer),
    applyMiddleware(thunk),
    applyMiddleware(middleware)
);

export const persistor = persistStore(store)

