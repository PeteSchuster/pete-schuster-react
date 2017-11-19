//Post list
export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE';

const ROOT_URL = 'https://peteschuster.com/wp-json/wp/v2';

function fetchPosts() {
  const request = fetch(`${ROOT_URL}/posts`);

  return {
    type: FETCH_POSTS,
    payload: request
  };
}

function fetchPostsSuccess(posts) {
  return {
    type: FETCH_POSTS_SUCCESS,
    payload: posts.reduce((result, item) => {
      result[item.id] = item;
      return result;
    }, {})
  };
}

function fetchPostsFailure(error) {
  return {
    type: FETCH_POSTS_FAILURE,
    payload: error
  };
}

export const dispatchFetchPosts = () => (dispatch, getState) => {
  const postKeys = Object.keys(getState().posts.itemsById);

  if (postKeys.length >= 10) {
    return null;
  }

  return dispatch(fetchPosts()).payload
    .then((resp) => resp.json())
    .then((response) => {
      dispatch(fetchPostsSuccess(response));
    }).catch((error) => {
      dispatch(fetchPostsFailure(error))
    });
}
