// NEON TEST COPY. This build never talks to Supabase: supabase.js is Neon's client and holds the Neon addresses.
// These two fields are only kept because the app passes them along; they are deliberately empty.
export const CONFIG = {
  supabaseUrl: '',
  supabaseKey: '',
  appName: 'FleetRecord',
  // Branding for the sign-in screen, which appears before we know who is signing in.
  // After sign-in the organisation's own brand (organisations.brand in the database) takes over.
  // To host the logo yourself, save it in this folder as logo.png and set logoUrl: 'logo.png'.
  brand: {
    name: 'Alchemy Drinks',
    logoUrl: 'https://alchemydrinks.co.uk/wp-content/uploads/2024/08/Screenshot-2024-08-02-at-15.51.13.png',
  },
};
