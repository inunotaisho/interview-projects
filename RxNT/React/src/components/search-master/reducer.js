import * as types from './constants';
import initialState from './initial.state';

export default function searchMasterReducer(state = initialState, action = {}) {
  switch (action.type) {
      case types.COMPONENTS_SAMPLE_PAGE_1_SPINNER_START:
        return {
          ...state,
          loading: true,
          data: []
      };
      case types.COMPONENTS_SAMPLE_PAGE_1_LOAD_SUCCESS:
        return {
          ...state,
          loading: false,
          data: action.data
      };
    default:
      return state;
  }
}
