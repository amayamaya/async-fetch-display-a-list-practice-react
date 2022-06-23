import { client } from './client';

export async function getFlowers() {
  const response = await client.from('flowers').select('*');

  return response.body;
}
