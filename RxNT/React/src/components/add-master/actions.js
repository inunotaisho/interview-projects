import * as types from './constants';

//console.log('some fs shit', fs)
import axios from 'axios';


export function addMaster(name, email) {
  return function (dispatch) {
    dispatch({
      type: types.COMPONENTS_SAMPLE_PAGE_2_SPINNER_START
    });

    let data = {
      id: 99,
      name,
      email
    };

    axios.post('http://localhost:4001/patients', data)
      .then(res => console.log('then hook', res))
      .catch(err => console.log('catch hook', err));

    // fs.writeFile('../../../data-store/data.js', data, (err, res) => {
    //   if (err) {
    //     return console.log('Error: ', err);
    //   }

    //   console.log('maybe err', err, 'maybe saved', res)
    // });

    // console.log('data inside action', data);

    dispatch({
      type: types.COMPONENTS_SAMPLE_PAGE_2_LOAD_SUCCESS,
      data: data
    });
  };
}
