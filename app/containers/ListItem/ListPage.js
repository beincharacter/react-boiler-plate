import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { loadListItems, setPage } from './actions';
import { makeSelectListItems, makeSelectLoading, makeSelectError, makeSelectPage } from './selectors';

function ListPage({ items, loading, error, page, onLoadListItems, onSetPage }) {
  useEffect(() => {
    onLoadListItems(page);
  }, [page]);

  const loadMore = () => {
    onSetPage(page + 1); 
  };

  return (
    <div>
      <h1>List of Items</h1>
      <ul>
        {items && items.map(item => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
      {loading && <p>Loading...</p>}
      {error && <p>Error loading items</p>}
      {!loading && !error && (
        <button onClick={loadMore}>Load More</button>  
      )}
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  items: makeSelectListItems(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
  page: makeSelectPage(),
});

const mapDispatchToProps = dispatch => ({
  onLoadListItems: (page) => dispatch(loadListItems(page)),
  onSetPage: (page) => dispatch(setPage(page)),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(ListPage);
