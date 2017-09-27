import * as React from 'react';
import Characters from './containers/characters';
import CharacterInfo from './containers/character-info';
import store from './store';
import { fetchCharacters } from './actions';
import { getCharacters } from './util';
const styles = require('./app.css');

const App = () => (
  <div>
    <button
      onClick={() =>
        getCharacters().then(result => {
          store.dispatch(fetchCharacters(result.data.data.characters));
        })}
    >
      Find your Heroes!
    </button>
    <div className={styles.mainContainer}>
      <Characters />
      <CharacterInfo />
    </div>
  </div>
);

export default App;
