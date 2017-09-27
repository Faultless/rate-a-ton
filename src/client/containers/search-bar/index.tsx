import * as React from 'react';

const SearchBar = (props: { searchCharacters: Function }) => (
  <input onChange={(event: any) => props.searchCharacters(event)} />
);

export default SearchBar;
