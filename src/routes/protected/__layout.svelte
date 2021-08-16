<script context="module">
  import { browser } from "$app/env";
  import { get } from "svelte/store";
  import { content } from "$lib/store";
  import Navbar from "$lib/Navbar.svelte";

  export async function load({ fetch, session }) {
    if (!session.jwt) {
      return {
        status: 302,
        redirect: "/"
      };
    }

    const storedContent = get(content);

    if (browser && storedContent) {
      return {
        props: {
          fetchedContent: storedContent
        }
      };
    }

    const res = await fetch("/protected.json");

    if (browser) {
      return {
        props: {
          fetchedContent: await res.text()
        }
      };
    } else {
      return {
        context: {
          fetchedContent: await res.text()
        }
      };
    }
  }
</script>

<script>
  export let fetchedContent;

  if (browser && fetchedContent) {
    $content = fetchedContent;
  }
</script>

<slot />
