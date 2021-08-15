# sveltekit-reproduce

A minimal example to show the kind of problem I'm having with SvelteKit. I want to store content that I fetch from a remote REST server inside of a Svelte store, so that I can read it on all subpages without fetching it again. And so that when the content changes (locally, or because of websocket updates), I can just update the store and all pages updates their content automatically. However, when I refresh the page, I can briefly see the old content before changing to the new content.

To reproduce:

1. `npm run dev`
2. On the homepage, observe the content string, then press the "Change content" button. Observe that the page got updated.
3. Click the "subpage" link, and observe that the most recent version of the content is indeed shown.
4. Refresh the page. You will see the old content briefly show up.

If you keep an eye on the terminal and the console in the browser, you will see that the first time you open the page, the content is fetched first from SSR, and then from the browser too. But when you refresh the page, the fetching is only done in the browser.