// Test build only: makes the Neon client look like the Supabase one the app was written for.
import { createClient } from '@neon/neon-js/supabase';

const AUTH_URL = 'https://ep-broad-dawn-za5zdi1r.neonauth.c-2.eu-west-2.aws.neon.tech/fleetrecord/auth';
const DATA_URL = 'https://ep-broad-dawn-za5zdi1r.apirest.c-2.eu-west-2.aws.neon.tech/fleetrecord/rest/v1';

const notYet = () => Promise.resolve({ data: null, error: { message: 'Documents are not available on the test copy yet.' } });
function make() {
  const client = createClient({ auth: { url: AUTH_URL }, dataApi: { url: DATA_URL } });
  // Neon has no Supabase-style file storage. Document upload and download are switched off on this copy.
  client.storage = { from: () => ({ getPublicUrl: () => ({ data: { publicUrl: '' } }), upload: notYet, remove: notYet, createSignedUrl: notYet, download: notYet }) };
  return client;
}
window.supabase = { createClient: make };
