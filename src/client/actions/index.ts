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

export const searchCharacters = (
  searchStr: string,
  characters: Array<Object>,
) => {
  return {
    type: 'SEARCH_CHARACTERS',
    payload: { characters, searchStr },
  };
};

export const setRating = (
  characters: Array<Object>,
  characterId: number,
  rating: number,
) => {
  return {
    type: 'SET_RATING',
    payload: { characters, characterId, rating },
  };
};
