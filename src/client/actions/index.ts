export const fetchCharacters = (Characters: Array<Object>) => {
  return {
    type: 'FETCH_CHARACTERS',
    payload: { Characters },
  };
};

export const fetchCharacter = (SelectedCharacter: Object) => {
  return {
    type: 'FETCH_CHARACTER',
    payload: { SelectedCharacter },
  };
};
