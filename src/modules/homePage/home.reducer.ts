import * as types from './home.types';

const initialState = {
  phones: [],
  projects: [],
  error: null,
};

const homeReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case types.FETCH_PHONE_REQUEST:
      return { ...state };
    case types.FETCH_PHONE_SUCCESS:
      return { ...state, phones: action.data.phones };
    case types.FETCH_PHONE_FAILURE:
      return { ...state, error: action.error };

    case types.FETCH_PROJECT_REQUEST:
      return { ...state };
    case types.FETCH_PROJECT_SUCCESS:
      return { ...state, projects: action.data.projects };
    case types.FETCH_PROJECT_FAILURE:
      return { ...state, error: action.error };

    default:
      return state;
  }
};

export default homeReducer;
