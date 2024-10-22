import { createSelector } from 'reselect';
import { initialListState } from './listReducer';

const selectList = state => state.list || initialListState;

export const makeSelectListItems = () =>
  createSelector(selectList, listState => listState.items);

export const makeSelectLoading = () =>
  createSelector(selectList, listState => listState.loading);

export const makeSelectError = () =>
  createSelector(selectList, listState => listState.error);

export const makeSelectPage = () =>
  createSelector(selectList, listState => listState.page);
