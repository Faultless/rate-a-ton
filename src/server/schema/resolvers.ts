import { API_KEY } from '../../shared/config';
import { getHeroes, getHeroById } from '../util/api';
import { db } from '../index';

type Rating = 0 | 1 | 2 | 3 | 4 | 5;

class Character {
  id: number;
  name: string;
  description: string;
  image: string;
  rating: Rating;
  constructor(data: {
    id: number;
    name: string;
    description: string;
    thumbnail?: { path: string; extension: string };
  }) {
    this.id = data.id;
    this.name = data.name;
    this.description = data.description;
    this.image = data.thumbnail
      ? `${data.thumbnail.path}.${data.thumbnail.extension}?apikey=${API_KEY}`
      : '';
    this.rating = 0;
  }
}

const Resolvers = {
  characters: () => {
    return getHeroes().then(result => {
      let newCharacters = [];
      newCharacters = result.data.data.results.map(
        characterData => new Character(characterData),
      );
      db.defaults({ characters: newCharacters }).write();
      return newCharacters;
    });
  },
  getCharacter: ({ characterId }: { characterId: number }) => {
    // return getHeroById(characterId.toString()).then(
    //   result => new Character(result.data.data.results[0]),
    // );
    return db
      .get('characters')
      .find({ id: characterId })
      .value();
  },
  setCharacterRating: ({
    characterId,
    rating,
  }: {
    characterId: number;
    rating: Rating;
  }) => {
    db
      .get('characters')
      .find({ id: characterId })
      .set('rating', rating)
      .write();
    return db
      .get('characters')
      .find({ id: characterId })
      .value();
  },
};

export default Resolvers;
