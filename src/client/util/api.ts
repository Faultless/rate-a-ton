import axios, { AxiosResponse } from 'axios';
import { API_KEY } from '../config';

export const getHeroes = async (): Promise<AxiosResponse> =>
  await axios.get(
    `https://gateway.marvel.com/v1/public/characters?orderBy=name&limit=10&apikey=${API_KEY}`,
  );

export const getHeroById = async (
  characterId: string,
): Promise<AxiosResponse> =>
  await axios.get(
    `https://gateway.marvel.com/v1/public/characters/${characterId}?apikey=${API_KEY}`,
  );
