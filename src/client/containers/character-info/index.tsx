import * as React from 'react';
import { connect } from 'react-redux';
import Information from '../../components/information';
import { setRating } from '../../actions';
import store from '../../store';

const mapStateToProps = (state: { selectedCharacter: Object }) => {
  return {
    selectedCharacter: state.selectedCharacter,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    rate: (characterId: number, number: number) =>
      dispatch(setRating(store.getState().characters, characterId, number)),
  };
};

const CharacterInfo = connect(mapStateToProps, mapDispatchToProps)(Information);

export default CharacterInfo;
