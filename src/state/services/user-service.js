import { client } from './supabase-client.js';

export async function signUp(email, password) {
  const response = await client.auth.signUp({ email, password });

  return response.user;
}

export async function signIn(email, password) {
  const response = await client.auth.signIn({ email, password });

  return response.user;
}

export async function logout() {
  return await client.auth.signOut();
}

export function getUser() {
  return client.auth.session();
}
