import * as express from 'express';
import * as FileSync from 'lowdb/adapters/FileSync';
import * as low from 'lowdb';
import { join } from 'path';
import * as graphqlHTTP from 'express-graphql';
import schema from './schema';
import Resolvers from './schema/resolvers';
import { APP_PORT, APP_DOMAIN } from '../shared/config';

const app = express();

const adapter = new FileSync('./db.json');
export const db = low(adapter);

app.use(express.static(join(__dirname, '/public')));
app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    rootValue: Resolvers,
    graphiql: true,
  }),
);

app.listen(
  APP_PORT,
  APP_DOMAIN,
  err =>
    err
      ? console.log(
          new Error('Something went wrong while creating the server.'),
        )
      : console.log(`Server running on port ${APP_PORT}`),
);
