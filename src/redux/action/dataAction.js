import axios from 'axios';
import {FETCH_FAILED, FETCH_START, FETCH_SUCCESS} from '../types';
import {API_URL} from '../../helper';

export const fetchData = () => {
  return async (dispatch) => {
    try {
      dispatch({type: FETCH_START});
      const response = await axios.get(`${API_URL}`);
      dispatch({type: FETCH_SUCCESS, payload: response.data});
    } catch (err) {
      dispatch({type: FETCH_FAILED, payload: err});
    }
  };
};
