import { buildSchema } from 'graphql';
import Character from './character';

const schema = buildSchema(`
  ${Character}
  type Mutation {
    setCharacterRating(characterId: Int!, rating: Int!): Character!
  }
  type Query {
    characters: [Character!]!
    getCharacter(characterId: Int!): Character
  }
`);

export default schema;
