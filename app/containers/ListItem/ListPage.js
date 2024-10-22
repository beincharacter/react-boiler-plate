import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { loadListItems } from './actions';
import { makeSelectListItems, makeSelectLoading, makeSelectError } from './selectors';

function ListPage({ items, loading, error, onLoadListItems }) {
  useEffect(() => {
    onLoadListItems();
  }, []);

  return (
    <div>
      <h1>List of Items</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error loading items</p>}
      <ul>
        {items && items.map(item => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  items: makeSelectListItems(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

const mapDispatchToProps = dispatch => ({
  onLoadListItems: () => dispatch(loadListItems()),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(ListPage);