export default function searchedCharacters(
  state = [],
  action: {
    type: string;
    payload: {
      characters: Array<{ id: number; name: string }> | null;
      searchStr: string;
    };
  },
) {
  if (action.type === 'SEARCH_CHARACTERS') {
    const filterCharacters: Array<
      Object
    > = action.payload.characters.filter(character =>
      character.name
        .toLowerCase()
        .includes(action.payload.searchStr.toLowerCase()),
    );
    return filterCharacters;
  }
  return state;
}
