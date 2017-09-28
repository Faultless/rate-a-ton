import * as React from 'react';
import { API_KEY } from '../../../shared/config';
const styles = require('./index.css');

const Information = (props: { rate: Function; selectedCharacter: any }) => {
  const ratingNumbers = [1, 2, 3, 4, 5];
  return (
    <div className={styles.infoContainer}>
      <p className={styles.name}>name: {props.selectedCharacter.name}</p>
      {props.selectedCharacter.image && (
        <img
          className={styles.thumbnail}
          src={props.selectedCharacter.image}
          alt={props.selectedCharacter.name}
        />
      )}
      <div className={styles.rating}>
        {props.selectedCharacter.rating > 0 ? (
          <span>{props.selectedCharacter.rating} stars</span>
        ) : (
          <ul className={styles.ratingList}>
            {ratingNumbers.map(number => (
              <li
                onClick={() => props.rate(props.selectedCharacter.id, number)}
              >
                {number}
              </li>
            ))}
          </ul>
        )}
      </div>
      <br />
      <p>description: {props.selectedCharacter.description}</p>
    </div>
  );
};

export default Information;
