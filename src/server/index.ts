import * as express from 'express';
import { join } from 'path';
import * as graphqlHTTP from 'express-graphql';
import schema from './schema';
import Resolvers from './schema/resolvers';
import { APP_PORT, APP_DOMAIN } from '../shared/config';

const app = express();

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
