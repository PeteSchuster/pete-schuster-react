import axios from 'axios';

//Post list
export const FETCH_PORTFOLIO_ITEMS = 'FETCH_PORTFOLIO_ITEMS';
export const FETCH_PORTFOLIO_ITEMS_SUCCESS = 'FETCH_PORTFOLIO_ITEMS_SUCCESS';
export const FETCH_PORTFOLIO_ITEMS_FAILURE = 'FETCH_PORTFOLIO_ITEMS_FAILURE';

//Fetch post
export const FETCH_PORTFOLIO_ITEM = 'FETCH_PORTFOLIO_ITEM';
export const FETCH_PORTFOLIO_ITEM_SUCCESS = 'FETCH_PORTFOLIO_ITEM_SUCCESS';
export const FETCH_PORTFOLIO_ITEM_FAILURE = 'FETCH_PORTFOLIO_ITEM_FAILURE';

const ROOT_URL = 'https://peteschuster.com/wp-json/wp/v2';

export function fetchPortfolioItems() {
  const request = axios({
    method: 'get',
    url: `${ROOT_URL}/portfolio_item`,
    headers: []
  });

  return {
    type: FETCH_PORTFOLIO_ITEMS,
    payload: request
  };
}

export function fetchPortfolioItemsSuccess(posts) {
  return {
    type: FETCH_PORTFOLIO_ITEMS_SUCCESS,
    payload: posts
  };
}

export function fetchPortfolioItemsFailure(error) {
  return {
    type: FETCH_PORTFOLIO_ITEMS_FAILURE,
    payload: error
  };
}
