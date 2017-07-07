import * as types from './constants';


export function load() {
  return function (dispatch) {
    dispatch({
      type: types.COMPONENTS_SAMPLE_PAGE_2_SPINNER_START
    });
    let data = {
      id: 1,
      name: 'Test, Grays1',
      email: 'test1@gmail.com'
    };

    dispatch({
      type: types.COMPONENTS_SAMPLE_PAGE_2_LOAD_SUCCESS,
      data: data
    });
  };
}
