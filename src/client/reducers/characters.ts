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
      Characters: Array<{ id: string; name: string }> | null;
    };
  },
): Object {
  switch (action.type) {
    case 'FETCH_CHARACTERS': {
      const filteredCharacters = action.payload.Characters.filter(
        character =>
          state.findIndex(searchCharacter =>
            idsAreEqual(character, searchCharacter),
          ) === -1,
      );
      const newState = Object.assign(
        {},
        state,
        state.concat(filteredCharacters),
      );
      return newState;
    }
    default:
      return state;
  }
}
