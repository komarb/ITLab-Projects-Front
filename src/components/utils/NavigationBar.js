import React from 'react';
import SearchBar from './SearchBar';
import Paginator from './Paginator';

export default function NavigationBar(props) {
  return (
    <div className="navigationBar">
      <SearchBar />
      <Paginator loadRepositoriesPage={props.loadRepositoriesPage} pagesCount={props.pagesCount} />
    </div>
  );
}
