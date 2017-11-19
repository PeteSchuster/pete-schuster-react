import {
  FETCH_POSTS, FETCH_POSTS_SUCCESS, FETCH_POSTS_FAILURE
} from '../actions/posts';

const INITIAL_STATE = { itemsById: {}, error: null, loading: false };

export default function(state = INITIAL_STATE, action) {
  let error;

  switch(action.type) {
    case FETCH_POSTS:
      return { ...state, loading: true };
    case FETCH_POSTS_SUCCESS:
      return { ...state, itemsById: {...state.itemsById, ...action.payload}, error: null, loading: false };
    case FETCH_POSTS_FAILURE:
      error = action.payload || { message: action.payload.message };
      return { ...state, error: error, loading: false };
    default:
      return state;
  }
}
