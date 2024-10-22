import produce from 'immer';
import { LOAD_LIST_ITEMS, LOAD_LIST_ITEMS_SUCCESS, LOAD_LIST_ITEMS_ERROR, SET_PAGE } from './constants';

export const initialListState = {
  loading: false,
  error: false,
  items: [],
  page: 1,
};

export const listReducer = (state = initialListState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOAD_LIST_ITEMS:
        draft.loading = true;
        draft.error = false;
        if (action.page === 1) {
          draft.items = [];
        }
        break;

      case LOAD_LIST_ITEMS_SUCCESS:
        draft.items = action.page === 1 ? action.items : [...state.items, ...action.items];
        draft.loading = false;
        draft.page = action.page;
        break;

      case LOAD_LIST_ITEMS_ERROR:
        draft.error = action.error;
        draft.loading = false;
        break;

      case SET_PAGE:
        draft.page = action.page;
        break;
    }
  });
