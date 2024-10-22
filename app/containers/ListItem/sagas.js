import { call, put, takeLatest } from 'redux-saga/effects';
import { LOAD_LIST_ITEMS, SET_PAGE } from './constants';
import { listItemsLoaded, listItemsLoadingError } from './actions';
import request from 'utils/request';

const LIST_ITEMS_API_BASE = 'https://jsonplaceholder.typicode.com/posts';

export function* getListItems(action) {
  const { page, limit } = action;
  const requestURL = `${LIST_ITEMS_API_BASE}?_limit=${limit}&_page=${page}`;

  try {
    const items = yield call(request, requestURL);
    yield put(listItemsLoaded(items, page));
  } catch (error) {
    yield put(listItemsLoadingError(error));
  }
}

export default function* listItemsSaga() {
  yield takeLatest(LOAD_LIST_ITEMS, getListItems);
}
