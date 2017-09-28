import * as React from 'react';
import Loader from '../loader';

let styles = require('./index.css');

const List = (props: { characters: any; onItemClick: any }) => (
  <ul className={styles.list}>
    {props.characters.length !== 0 ? (
      props.characters.map(character => (
        <li onClick={() => props.onItemClick(character.id)} key={character.id}>
          {character.name}
        </li>
      ))
    ) : (
      <Loader />
    )}
  </ul>
);

export default List;
