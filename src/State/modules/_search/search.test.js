import reducer, { initialState } from './reducer';
import * as Types from './types';

describe('Search Reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle SEARCH_REQUEST', () => {
    expect(
      reducer([], {
        type: Types.SEARCH_REQUEST,
      })
    ).toEqual({
      isLoading: true,
      error: '',
      data: [],
    });
  });

  it('should handle SEARCH_SUCCESS', () => {
    expect(
      reducer([], {
        type: Types.SEARCH_SUCCESS,
        response: {
          hits: [
            {
              id: 1,
            },
            {
              id: 2,
            },
          ],
        },
      })
    ).toEqual({
      isLoading: false,
      error: '',
      data: [
        {
          id: 1,
        },
        {
          id: 2,
        },
      ],
    });
  });

  it('should handle SEARCH_FAILURE', () => {
    expect(
      reducer([], {
        type: Types.SEARCH_FAILURE,
        error: 'Error',
      })
    ).toEqual({
      isLoading: false,
      error: 'Error',
      data: [],
    });
  });

  it('should handle SEARCH_CLEAR', () => {
    expect(
      reducer([], {
        type: Types.SEARCH_CLEAR,
      })
    ).toEqual({
      isLoading: false,
      error: '',
      data: [],
    });
  });
});
