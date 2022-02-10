import preprocess from "svelte-preprocess";
import vercel from '@sveltejs/adapter-vercel';
// for static adapter
import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  
  kit: {
    // hydrate the <div id="svelte"> element in src/app.html
    target: "#svelte",

    // for vercel adapter
    adapter: vercel(),

    // for static adapter
    // adapter: adapter({ pages: 'build', assets: 'build', fallback: null})
  },

  preprocess: [
    preprocess({
      postcss: true,
    }),
  ],
};

export default config;
