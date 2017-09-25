import * as React from 'react';

let styles = require('./index.css');

const List = (props: { characters: any; onItemClick: any }) => (
  <ul className={styles.list}>
    {props.characters.length !== 0 &&
      Object.keys(props.characters).map((character, index) => (
        <li
          onClick={() => props.onItemClick(props.characters[index].id)}
          key={props.characters[index].id}
        >
          {props.characters[index].name}
        </li>
      ))}
  </ul>
);

export default List;
