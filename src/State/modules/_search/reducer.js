import createReducer from '../../utils/createReducer';
import * as Types from './types';

export const initialState = {
  isLoading: false,
  error: '',
  data: [],
  random: undefined,
};

export default createReducer(initialState, {
  [Types.SEARCH_REQUEST]() {
    return {
      isLoading: true,
      error: '',
      data: [],
    };
  },
  [Types.SEARCH_SUCCESS](state, action) {
    return {
      isLoading: false,
      error: '',
      data: action?.response?.hits,
    };
  },
  [Types.SEARCH_FAILURE](state, action) {
    return {
      isLoading: false,
      error: action.error,
      data: [],
    };
  },
  [Types.SEARCH_CLEAR]() {
    return {
      isLoading: false,
      error: '',
      data: [],
    };
  },
});
