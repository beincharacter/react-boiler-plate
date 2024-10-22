import { call, put, takeLatest } from 'redux-saga/effects';
import { LOAD_LIST_ITEMS } from './constants';
import { listItemsLoaded, listItemsLoadingError } from './actions';
import request from 'utils/request'; 

const LIST_ITEMS_API = 'https://jsonplaceholder.typicode.com/posts?_limit=10&_page=1';

export function* getListItems() {
  try {
    console.log("inside getlistiyems func")
    const items = yield call(request, LIST_ITEMS_API);
    yield put(listItemsLoaded(items));
  } catch (error) {
    yield put(listItemsLoadingError(error));
  }
}

export default function* listItemsSaga() {
  console.log("inside getlistiyemsaga func and calling listitems")
  yield takeLatest(LOAD_LIST_ITEMS, getListItems);
}
