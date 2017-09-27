import { buildSchema } from 'graphql';
import Character from './character';

const schema = buildSchema(`
  ${Character}
  type Query {
    characters: [Character!]!
    getCharacter(characterId: Int!): Character
  }
`);

export default schema;
