import {LOGIN, LOGOUT, AUTH_START} from '../types';
const INITIAL_STATE = {
  username: '',
  password: '',
  isLogin: false,
  error: false,
  loading: false,
};

export const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AUTH_START:
      return {
        ...state,
        loading: true,
      };
    case LOGIN:
      return {
        ...state,
        username: action.payload,
        isLogin: true,
        loading: false,
      };
    case LOGOUT: {
      return INITIAL_STATE;
    }
    default:
      return state;
  }
};
