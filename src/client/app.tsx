import * as React from 'react';
import Characters from './containers/characters';
import CharacterInfo from './containers/character-info';
import SearchBar from './containers/search-bar';
import store from './store';
import { fetchCharacters, searchCharacters } from './actions';
import { getCharacters } from './util';
const styles = require('./app.css');

class App extends React.Component {
  componentWillMount() {
    getCharacters().then(result => {
      store.dispatch(fetchCharacters(result.data.data.characters));
    });
  }

  searchChars = (event: any) => {
    const characters = store.getState().characters;
    store.dispatch(searchCharacters(event.target.value, characters));
  };

  render() {
    return (
      <div>
        <SearchBar searchCharacters={this.searchChars} />
        <div className={styles.mainContainer}>
          <Characters />
          <CharacterInfo />
        </div>
      </div>
    );
  }
}

export default App;
