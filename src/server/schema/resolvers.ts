import { getHeroes } from '../util/api';

class Character {
  id: number;
  name: string;
  description: string;
  constructor(data: { id: number; name: string; description: string }) {
    this.id = data.id;
    this.name = data.name;
    this.description = data.description;
  }
}

const Resolvers = {
  characters: () => {
    return getHeroes().then(result => {
      let newCharacters = [];
      newCharacters = result.data.data.results.map(
        characterData => new Character(characterData),
      );
      return newCharacters;
    });
  },
};

export default Resolvers;
