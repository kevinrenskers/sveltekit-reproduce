# sveltekit-reproduce

A minimal example to show the kind of problem I'm having with SvelteKit. I want to store content that I fetch from a remote REST server inside of a Svelte store, so that I can read it on all subpages without fetching it again. And so that when the content changes (locally, or because of websocket updates), I can just update the store and all pages updates their content automatically. However, when I refresh the page, I can briefly see the old content before changing to the new content. Even worse, content is shared between different browsers, so if you login in one browser and then open another browser, you're also logged in there.

To reproduce:

1. `npm run dev`
2. On the homepage, press the login button.
3. Observe that you're now on a protect page, yet the header still says "Not logged in". Also observe the timestamp on the webpage. Now reload the page.
4. The header changes to say "Logged in as Kevin!", and you will see a brief flash where the timestamp changes from that initial one to the current one.
5. If you press on the "subpage" link and from there on "back", you will notice that no new requests are made to the server, which is good.
6. Now open another browser and it briefly flashes "Logged in as Kevin!" before reverting back to "Not logged in".

