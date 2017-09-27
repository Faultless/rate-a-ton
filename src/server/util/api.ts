import axios, { AxiosResponse } from 'axios';
import * as md5 from 'md5';
import * as timestamp from 'unix-timestamp';
import { API_KEY } from '../../shared/config';
import { PRIVATE_KEY } from '../../server/secret';

export const getHeroes = async (): Promise<AxiosResponse> => {
  let ts: string = timestamp.now().toString();
  let hash: string = md5(`${ts}${PRIVATE_KEY}${API_KEY}`);
  return await axios.get(
    `https://gateway.marvel.com/v1/public/characters?orderBy=name&limit=10&ts=${ts}&apikey=${API_KEY}&hash=${hash}`,
  );
};

export const getHeroById = async (
  characterId: string,
): Promise<AxiosResponse> =>
  await axios.get(
    `https://gateway.marvel.com/v1/public/characters/${characterId}?apikey=${API_KEY}`,
  );
