import { LOAD_LIST_ITEMS, LOAD_LIST_ITEMS_SUCCESS, LOAD_LIST_ITEMS_ERROR, SET_PAGE } from './constants';

export const loadListItems = (page = 1, limit = 10) => ({
  type: LOAD_LIST_ITEMS,
  page, 
  limit, 
});

export const listItemsLoaded = (items, page) => ({
  type: LOAD_LIST_ITEMS_SUCCESS,
  items,
  page,
});

export const listItemsLoadingError = error => ({
  type: LOAD_LIST_ITEMS_ERROR,
  error,
});

export const setPage = (page) => ({
  type: SET_PAGE,
  page,
});
