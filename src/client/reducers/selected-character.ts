export default function selectedCharacter(
  state = {},
  action: { type: string; payload: { selectedCharacter: Object | null } },
): Object {
  switch (action.type) {
    case 'FETCH_CHARACTER':
      console.log(action.payload);
      const newState = Object.assign(
        {},
        state,
        action.payload.selectedCharacter,
      );
      return newState;
    default:
      return state;
  }
}
