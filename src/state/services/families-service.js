import { client, checkError } from './supabase-client.js';

export async function getAllFamilies() {
  const response = await client.from('families').select('*').order('date', { ascending: false });

  return checkError(response);
}

export async function getFamilyById(id) {
  const response = await client.from('families').select('*').match({ id }).single();

  return checkError(response);
}

export async function updateFamily(family) {
  const response = await client.from('families').update([family]).match({ id: family.id });

  return checkError(response);
}

export async function createFamily(family) {
  const response = await client.from('families').insert([family]);

  return checkError(response);
}

export async function deleteFamily(id) {
  const response = await client.from('families').delete().match({ id });

  return checkError(response);
}
