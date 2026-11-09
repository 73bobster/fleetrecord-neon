// Test build only: makes the Neon client look like the Supabase one the app was written for.
import { createClient } from '@neon/neon-js/supabase';

const AUTH_URL = 'https://ep-broad-dawn-za5zdi1r.neonauth.c-2.eu-west-2.aws.neon.tech/fleetrecord/auth';
const DATA_URL = 'https://ep-broad-dawn-za5zdi1r.apirest.c-2.eu-west-2.aws.neon.tech/fleetrecord/rest/v1';

const notYet = () => Promise.resolve({ data: null, error: { message: 'Documents are not available on the test copy yet.' } });
function make() {
  const client = createClient({ auth: { url: AUTH_URL }, dataApi: { url: DATA_URL } });
  // Neon has no Supabase-style file storage. Document upload and download are switched off on this copy.
  client.storage = { from: () => ({ getPublicUrl: () => ({ data: { publicUrl: '' } }), upload: notYet, remove: notYet, createSignedUrl: notYet, download: notYet }) };
  // Neon's client does not announce a sign-in to the rest of the page, so the app would sit on the Sign in button
  // until a manual refresh. After a successful password sign-in, reload so the app starts from the new session.
  const signIn = client.auth.signInWithPassword.bind(client.auth);
  client.auth.signInWithPassword = async (...args) => {
    const res = await signIn(...args);
    if (res && !res.error && res.data && res.data.session !== null) setTimeout(() => location.reload(), 150);
    return res;
  };
  return client;
}
window.supabase = { createClient: make };
