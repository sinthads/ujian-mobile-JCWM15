import {FETCH_START, FETCH_SUCCESS, FETCH_FAILED} from '../types';
const INITIAL_STATE = {
  dataList: [],
  loading: false,
  error: false,
};

export const dataReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_START:
      return {
        ...state,
        loading: true,
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        dataList: action.payload,
      };
    case FETCH_FAILED:
      return {
        ...state,
        error: true,
        loading: false,
      };
    default:
      return state;
  }
};
