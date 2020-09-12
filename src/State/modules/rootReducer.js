import { combineReducers } from 'redux';
import { searchReducer as search } from '.';

const rootReducer = combineReducers({
  search,
});

export { rootReducer };
