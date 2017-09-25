import * as React from 'react';

const Information = (props: { selectedCharacter: any }) => (
  <div>
    <p>name: {props.selectedCharacter.name}</p>
    <br />
    <p>gender: {props.selectedCharacter.gender}</p>
    <br />
    <p>description: {props.selectedCharacter.description}</p>
  </div>
);

export default Information;
