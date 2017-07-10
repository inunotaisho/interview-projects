import * as types from './constants';
import Data from '../../../data-store/data';


export function load() {
  return function (dispatch) {
    dispatch({
      type: types.COMPONENTS_SAMPLE_PAGE_1_SPINNER_START
    });
    let data = Data;

    dispatch({
      type: types.COMPONENTS_SAMPLE_PAGE_1_LOAD_SUCCESS,
      data: data
    });
  };
}
