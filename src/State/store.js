import {createStore, applyMiddleware, compose} from 'redux';
import createDebounce from 'redux-debounced';
import thunkMiddleware from 'redux-thunk';

import {rootReducer} from './modules/rootReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(createDebounce(), thunkMiddleware)),
);
