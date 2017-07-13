import * as types from './constants';
import axios from 'axios';

export function load() {
  return function (dispatch) {
    dispatch({
      type: types.COMPONENTS_SAMPLE_PAGE_1_SPINNER_START
    });

    let data;

    axios.get('http://localhost:4001/patients')
      .then(res => {
        console.log('qqqqqqq', typeof res.data)
        dispatch({
          type: types.COMPONENTS_SAMPLE_PAGE_1_LOAD_SUCCESS,
          data: res.data
        });
      })
      .catch(err => console.log('catch hook', err));


  };
}
