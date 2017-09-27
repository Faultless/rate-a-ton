import * as _ from 'ramda';

const propertiesAreEqual = _.curry((prop, obj, compObj) =>
  _.equals(obj[prop], compObj[prop]),
);

const idsAreEqual = propertiesAreEqual('id');

export default function characters(
  state = [],
  action: {
    type: string;
    payload: {
      characters: Array<{ id: string; name: string }> | null;
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
    default:
      return state;
  }
}
