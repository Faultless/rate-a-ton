export default function selectedCharacter(
  state = {},
  action: { type: string; payload: { SelectedCharacter: Object | null } },
): Object {
  switch (action.type) {
    case 'FETCH_CHARACTER':
      const newState = Object.assign(
        {},
        state,
        action.payload.SelectedCharacter,
      );
      return newState;
    default:
      return state;
  }
}
