import { LOAD_LIST_ITEMS, LOAD_LIST_ITEMS_SUCCESS, LOAD_LIST_ITEMS_ERROR } from './constants';

export const loadListItems = () => ({
  type: LOAD_LIST_ITEMS,
});

export const listItemsLoaded = items => ({
  type: LOAD_LIST_ITEMS_SUCCESS,
  items,
});

export const listItemsLoadingError = error => ({
  type: LOAD_LIST_ITEMS_ERROR,
  error,
});
