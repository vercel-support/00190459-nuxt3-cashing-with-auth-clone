import { kv } from '@vercel/kv';
import { users } from '~/dbFake';

export default defineEventHandler(async (event) => {
  const count = (await kv.get('count')) || users[0].count;
  return { count };
});
