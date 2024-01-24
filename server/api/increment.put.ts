import { kv } from '@vercel/kv';
import { users } from '~/dbFake';

export default defineEventHandler(async (event) => {
  const count = ((await kv.get<number>('count')) || users[0].count) + 1;
  await kv.set('count', count);
  return { count };
});
