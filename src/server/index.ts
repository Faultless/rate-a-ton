import * as express from 'express';
import { join } from 'path';

const app = express();

app.use(express.static(join(__dirname, '/public')));

app.listen(
  3030,
  err =>
    err
      ? console.log(
          new Error('Something went wrong while creating the server.'),
        )
      : console.log('Server running on port 3030'),
);
