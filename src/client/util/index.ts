import axios, { AxiosResponse } from 'axios';
import { APP_DOMAIN, APP_PORT } from '../../shared/config';

axios.defaults = {
  baseURL: `http://${APP_DOMAIN}:${APP_PORT}`,
};

const config = { headers: { 'Content-Type': 'application/json' } };

export const getCharacters = async (): Promise<AxiosResponse> => {
  const data = JSON.stringify({
    query: '{ characters { id, name, description } }',
  });
  const promise = await axios.post('/graphql', data, config);
  return promise;
};

export const getCharacter = async (id: number): Promise<AxiosResponse> => {
  const data = JSON.stringify({
    query: `query GetCharacter($id: Int!) {
      getCharacter(characterId: $id) { name, description, image }
    }`,
    variables: { id: id },
  });
  return await axios.post('/graphql', data, config);
};
