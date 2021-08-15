<script context="module">
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

    if (storedContent) {
      return {
        props: {
          fetchedContent: storedContent
        }
      };
    }

    const res = await fetch("/protected.json");

    return {
      props: {
        fetchedContent: await res.text()
      }
    };
  }
</script>

<script>
  export let fetchedContent;

  if (fetchedContent) {
    $content = fetchedContent;
  }
</script>

<slot />
