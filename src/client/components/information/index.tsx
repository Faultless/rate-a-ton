import * as React from 'react';
import { API_KEY } from '../../../shared/config';

const Information = (props: { selectedCharacter: any }) => (
  <div>
    <p>name: {props.selectedCharacter.name}</p>
    <br />
    {props.selectedCharacter.thumbnail && (
      <img
        src={`${props.selectedCharacter.thumbnail.path}.${props
          .selectedCharacter.thumbnail.extension}?apikey=${API_KEY}`}
        alt={props.selectedCharacter.name}
      />
    )}
    <br />
    <p>description: {props.selectedCharacter.description}</p>
  </div>
);

export default Information;
