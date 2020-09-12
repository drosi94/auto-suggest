const simpleAction = (type) => {
  return { type };
};
const request = (type) => {
  return { type };
};
const success = (type, response) => {
  return { type, response };
};
const failure = (type, error) => {
  return { type, error };
};

const createAction = {
  request,
  success,
  failure,
  simpleAction,
};

const dispatchRequest = (type, requestService, params) => {
  const thunk = (dispatch) => {
    return new Promise((resolve, reject) => {
      dispatch(createAction.request(type.REQUEST));
      requestService(params).then(
        (response) => {
          dispatch(createAction.success(type.SUCCESS, response));
          resolve(response);
        },
        (error) => {
          dispatch(createAction.failure(type.FAILURE, error));
          reject(error);
        }
      );
    });
  };
  thunk.meta = {
    debounce: {
      time: 850,
      key: type.REQUEST,
    },
  };
  return thunk;
};

const dispatchCustomAction = (type, payload) => {
  return (dispatch) => {
    dispatch({ type, payload });
  };
};

const dispatchHelper = {
  dispatchRequest,
  dispatchCustomAction,
};

export default dispatchHelper;
