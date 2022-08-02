import { client } from './supabase-client.js';

export async function getAllFamilies() {
  const response = await client.from('families').select(
    `
      id,
      created_at,
      name,
      families:family_members(
        id,
        name,
        familyId:family_id
      )
    `
  );

  return response;
}

export async function getFamilyById(id) {
  const response = await client.from('families').select('*').match({ id }).single();

  return response;
}

export async function updateFamily(family) {
  const response = await client.from('families').update([family]).match({ id: family.id });

  return response;
}

export async function createFamily(family) {
  const response = await client.from('families').insert([family]);

  return response;
}

export async function deleteFamily(id) {
  const response = await client.from('families').delete().match({ id });

  return response;
}
