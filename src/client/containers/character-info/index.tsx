import * as React from 'react';
import { connect } from 'react-redux';
import Information from '../../components/information';

const mapStateToProps = (state: { selectedCharacter: Object }) => {
  return {
    selectedCharacter: state.selectedCharacter,
  };
};

const CharacterInfo = connect(mapStateToProps)(Information);

export default CharacterInfo;
