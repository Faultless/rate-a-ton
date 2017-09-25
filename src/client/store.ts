import { createStore, combineReducers } from 'redux';
import characters from './reducers/characters';
import selectedCharacter from './reducers/selected-character';

const reducer = combineReducers({ characters, selectedCharacter });

interface Window {
  __REDUX_DEVTOOLS_EXTENSION__?: any;
}

declare const window: Window;

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
