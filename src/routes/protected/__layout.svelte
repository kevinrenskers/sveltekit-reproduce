<script context="module">
  import { browser } from "$app/env";
  import { get } from "svelte/store";
  import { content } from "$lib/store";
  import Navbar from "$lib/Navbar.svelte";

  export async function load({ fetch, session }) {
    // Redirect if not logged in
    if (!session.jwt) {
      return {
        status: 302,
        redirect: "/"
      };
    }

    // If we already have the content, then don't fetch it again
    const storedContent = get(content);
    if (browser && storedContent) {
      return {
        props: { fetchedContent: storedContent },
      };
    }

    // Fetch remote content, give it back as a prop AND context
    const res = await fetch("/protected.json");
    const fetchedContent = await res.text();

    return {
      props: { fetchedContent },
      context: { fetchedContent },
    };
  }
</script>

<script>
  export let fetchedContent;

  // If we're running in the browser, then we can save the fetched content in the store
  if (browser) {
    $content = fetchedContent;
  }
</script>

<slot />
