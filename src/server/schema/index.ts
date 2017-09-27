import { buildSchema } from 'graphql';
import Character from './character';

const schema = buildSchema(`
  ${Character}
  type Query {
    characters: [Character!]!
  }
`);

export default schema;
