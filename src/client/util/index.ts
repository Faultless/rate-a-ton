import axios, { AxiosResponse } from 'axios';
import { APP_DOMAIN, APP_PORT } from '../../shared/config';

axios.defaults = {
  baseURL: `http://${APP_DOMAIN}:${APP_PORT}`,
};

const config = { headers: { 'Content-Type': 'application/json' } };

export const getCharacters = async (): Promise<AxiosResponse> => {
  const data = JSON.stringify({
    query: '{ characters { id, name, description, rating } }',
  });
  const promise = await axios.post('/graphql', data, config);
  return promise;
};

export const getCharacter = async (id: number): Promise<AxiosResponse> => {
  const data = JSON.stringify({
    query: `query GetCharacter($id: Int!) {
      getCharacter(characterId: $id) { id, name, description, image, rating }
    }`,
    variables: { id: id },
  });
  return await axios.post('/graphql', data, config);
};

export const setCharacterRating = async (
  id: number,
  rating: number,
): Promise<AxiosResponse> => {
  const data = JSON.stringify({
    query: `mutation SetCharacterRating($id: Int!, $rating: Int!) {
      setCharacterRating(characterId: $id, rating: $rating) { id, name, description, image, rating }
    }`,
    variables: { id: id, rating: rating },
  });
  return await axios.post('/graphql', data, config);
};
