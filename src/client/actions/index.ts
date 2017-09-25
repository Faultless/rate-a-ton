export const fetchCharacters = (characters: Array<Object>) => {
  return {
    type: 'FETCH_CHARACTERS',
    payload: { characters },
  };
};

export const fetchCharacter = (selectedCharacter: Object) => {
  return {
    type: 'FETCH_CHARACTER',
    payload: { selectedCharacter },
  };
};
