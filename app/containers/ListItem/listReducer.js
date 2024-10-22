import produce from 'immer';
import { LOAD_LIST_ITEMS, LOAD_LIST_ITEMS_SUCCESS, LOAD_LIST_ITEMS_ERROR } from './constants';

export const initialListState = {
  loading: false,
  error: false,
  items: [],
};

export const listReducer = (state = initialListState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOAD_LIST_ITEMS:
        draft.loading = true;
        draft.error = false;
        draft.items = [];
        break;

      case LOAD_LIST_ITEMS_SUCCESS:
        draft.items = action.items;
        draft.loading = false;
        break;

      case LOAD_LIST_ITEMS_ERROR:
        draft.error = action.error;
        draft.loading = false;
        break;
    }
  });

