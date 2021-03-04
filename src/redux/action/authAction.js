import AsyncStorage from '@react-native-async-storage/async-storage';
import {LOGIN, LOGOUT, AUTH_START} from '../types';

export const loginAction = (username) => {
  return (dispatch) => {
    try {
      dispatch({type: AUTH_START});
      AsyncStorage.setItem('username', username);
      dispatch({type: LOGIN, payload: username});
    } catch (err) {
      console.log(err);
    }
  };
};

export const logoutAction = () => {
  return (dispatch) => {
    try {
      AsyncStorage.clear();
      dispatch({
        type: LOGOUT,
      });
    } catch (err) {
      console.log(err);
    }
  };
};

export const keepLogin = () => {
  return async (dispatch) => {
    try {
      dispatch({type: AUTH_START});
      const username = await AsyncStorage.getItem('username');
      if (username) {
        dispatch({type: LOGIN});
      }
    } catch (err) {
      console.log(err);
    }
  };
};
