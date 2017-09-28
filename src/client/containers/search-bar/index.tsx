import * as React from 'react';
const styles = require('./index.css');

const SearchBar = (props: { searchCharacters: Function }) => (
  <div className={styles.input}>
    <input onChange={(event: any) => props.searchCharacters(event)} />
  </div>
);

export default SearchBar;
