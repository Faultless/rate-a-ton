import axios, { AxiosResponse } from 'axios';
import { APP_DOMAIN, APP_PORT } from '../../shared/config';

export const getCharacters = async (): Promise<AxiosResponse> => {
  const data = JSON.stringify({
    query: '{ characters { id, name, description } }',
  });
  const promise = await axios.post(
    `http://${APP_DOMAIN}:${APP_PORT}/graphql`,
    data,
    { headers: { 'Content-Type': 'application/json' } },
  );
  return promise;
};
