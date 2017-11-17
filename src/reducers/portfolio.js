import {
  FETCH_PORTFOLIO_ITEMS, FETCH_PORTFOLIO_ITEMS_SUCCESS, FETCH_PORTFOLIO_ITEMS_FAILURE
} from '../actions/posts';

const INITIAL_STATE = { itemsById: {}, error: null, loading: false };

export default function(state = INITIAL_STATE, action) {
  let error;

  switch(action.type) {
    case FETCH_PORTFOLIO_ITEMS:
      return { ...state, loading: true };
    case FETCH_PORTFOLIO_ITEMS_SUCCESS:
      return { ...state, itemsById: {...state.itemsById, ...action.payload}, error: null, loading: false };
    case FETCH_PORTFOLIO_ITEMS_FAILURE:
      error = action.payload || { message: action.payload.message };
      return { ...state, error: error, loading: false };
    default:
      return state;
  }
}
