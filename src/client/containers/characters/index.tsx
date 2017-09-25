import * as React from 'react';
import { connect } from 'react-redux';
import { fetchCharacter } from '../../actions';
import { getHeroById } from '../../util/api';
import List from '../../components/list';

const mapStateToProps = (state: {
  characters: Array<{ id: string; name: string }>;
}) => {
  return {
    characters: state.characters,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onItemClick: (id: string) => {
      getHeroById(id).then(result => {
        dispatch(fetchCharacter(result.data));
      });
    },
  };
};

const Characters = connect(mapStateToProps, mapDispatchToProps)(List);

export default Characters;
