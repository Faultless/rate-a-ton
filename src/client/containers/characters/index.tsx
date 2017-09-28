import * as React from 'react';
import { connect } from 'react-redux';
import { fetchCharacter } from '../../actions';
import List from '../../components/list';
import { getCharacter } from '../../util';

const mapStateToProps = (state: {
  searchedCharacters: Array<{ id: number; name: string; rating: string }>;
}) => {
  return {
    characters: state.searchedCharacters,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onItemClick: (id: number) => {
      getCharacter(id).then(result => {
        dispatch(fetchCharacter(result.data.data.getCharacter));
      });
    },
  };
};

const Characters = connect(mapStateToProps, mapDispatchToProps)(List);

export default Characters;
