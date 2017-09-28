import * as _ from 'ramda';
import { setCharacterRating } from '../util';

const propertiesAreEqual = _.curry((prop, obj, compObj) =>
  _.equals(obj[prop], compObj[prop]),
);

type Rating = 0 | 1 | 2 | 3 | 4 | 5;

const idsAreEqual = propertiesAreEqual('id');

export default function characters(
  state = [],
  action: {
    type: string;
    payload: {
      characters: Array<{ id: number; name: string; rating: Rating }> | null;
      rating: Rating | null;
      characterId: number | null;
    };
  },
): Object {
  switch (action.type) {
    case 'FETCH_CHARACTERS': {
      const filteredCharacters = action.payload.characters.filter(
        character =>
          state.findIndex(searchCharacter =>
            idsAreEqual(character, searchCharacter),
          ) === -1,
      );
      const newState = state.concat(filteredCharacters);
      return newState;
    }
    case 'SET_RATING': {
      const ratedCharIndex = _.findIndex(
        item => item.id === action.payload.characterId,
        action.payload.characters,
      );
      const newState = [];
      state.map((character, index) => {
        if (index === ratedCharIndex) {
          newState.push(
            Object.assign({}, character, { rating: action.payload.rating }),
          );
        } else {
          newState.push(character);
        }
      });
      setCharacterRating(action.payload.characterId, action.payload.rating);
      return newState;
    }
    default:
      return state;
  }
}
