import axios, { AxiosResponse } from 'axios';
import * as md5 from 'md5';
import * as timestamp from 'unix-timestamp';
import { API_KEY } from '../../shared/config';
import { PRIVATE_KEY } from '../../server/secret';

axios.defaults.baseURL = 'https://gateway.marvel.com/v1/public';

export const getHeroes = async (): Promise<AxiosResponse> => {
  const ts: string = timestamp.now().toString();
  const hash: string = md5(`${ts}${PRIVATE_KEY}${API_KEY}`);
  return await axios.get(
    `/characters?orderBy=name&limit=100&ts=${ts}&apikey=${API_KEY}&hash=${hash}`,
  );
};

export const getHeroById = async (
  characterId: string,
): Promise<AxiosResponse> => {
  const ts: string = timestamp.now().toString();
  const hash: string = md5(`${ts}${PRIVATE_KEY}${API_KEY}`);
  return await axios.get(
    `/characters/${characterId}?ts=${ts}&apikey=${API_KEY}&hash=${hash}`,
  );
};
