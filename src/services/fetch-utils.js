import { client } from './client';

export async function getFlowers() {
  const response = await client.from('flowers').select('*');

  return response.body;
}

export async function getHerbs() {
  const response = await client.from('herbs').select('*');

  return response.body;
}