import * as Types from './types';
import * as Services from './services';
import dispatchHelper from '../../utils/dispatchHelper';

export const search = (query = '') => {
  return dispatchHelper.dispatchRequest(
    {
      REQUEST: Types.SEARCH_REQUEST,
      SUCCESS: Types.SEARCH_SUCCESS,
      FAILURE: Types.SEARCH_FAILURE,
    },
    () => Services.search(query)
  );
};

export const clearSearch = () => {
  return dispatchHelper.dispatchCustomAction(Types.SEARCH_CLEAR)
}
