import * as React from 'react';
import { API_KEY } from '../../../shared/config';
const styles = require('./index.css');

const Information = (props: { selectedCharacter: any }) => (
  <div className={styles.infoContainer}>
    <p className={styles.name}>name: {props.selectedCharacter.name}</p>
    {props.selectedCharacter.image && (
      <img
        className={styles.thumbnail}
        src={props.selectedCharacter.image}
        alt={props.selectedCharacter.name}
      />
    )}
    <br />
    <p>description: {props.selectedCharacter.description}</p>
  </div>
);

export default Information;
