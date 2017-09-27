import { createStore, combineReducers } from 'redux';
import characters from './reducers/characters';
import selectedCharacter from './reducers/selected-character';
import searchedCharacters from './reducers/searched-characters';

const reducer = combineReducers({
  characters,
  selectedCharacter,
  searchedCharacters,
});

interface Window {
  __REDUX_DEVTOOLS_EXTENSION__?: any;
}

declare const window: Window;

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
