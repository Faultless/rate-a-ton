import * as React from 'react';
import Characters from './containers/characters';
import CharacterInfo from './containers/character-info';
import store from './store';
import { fetchCharacters } from './actions';
import { getHeroes } from './util/api';
const App = () => (
  <div>
    <button
      onClick={() =>
        getHeroes().then(result =>
          store.dispatch(fetchCharacters(result.data.Characters)),
        )}
    >
      Find your Heroes!
    </button>
    <Characters />
    <CharacterInfo />
  </div>
);

export default App;
