import axios from 'axios';

//Post list
export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE';

const ROOT_URL = 'https://peteschuster.com/wp-json/wp/v2';

function fetchPosts() {
  const request = axios({
    method: 'get',
    url: `${ROOT_URL}/posts`,
    headers: []
  });

  return {
    type: FETCH_POSTS,
    payload: request
  };
}

function fetchPostsSuccess(posts) {
  return {
    type: FETCH_POSTS_SUCCESS,
    payload: posts
  };
}

function fetchPostsFailure(error) {
  return {
    type: FETCH_POSTS_FAILURE,
    payload: error
  };
}

export function dispatchFetchPosts() {
  return function(dispatch) {
    dispatch(fetchPosts()).payload.then((response) => {
      dispatch(fetchPostsSuccess(response));
    }).catch((error) => {
      dispatch(fetchPostsFailure(error))
    });
  }
}
