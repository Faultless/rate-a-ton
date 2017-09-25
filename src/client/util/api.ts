import axios, { AxiosResponse } from 'axios';

export const getHeroes = async (): Promise<AxiosResponse> =>
  await axios.get(
    'http://private-c7981ed-superheroes.apiary-mock.com/characters/',
  );

export const getHeroById = async (id: string): Promise<AxiosResponse> =>
  await axios.get(
    `http://private-c7981ed-superheroes.apiary-mock.com/characters/${id}`,
  );
