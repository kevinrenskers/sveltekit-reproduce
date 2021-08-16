<script context="module">
  export async function load({ fetch, session }) {
    if (!session.jwt) {
      return {
        status: 302,
        redirect: "/"
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
  import { content } from "$lib/store";
  import Navbar from "$lib/Navbar.svelte";

  export let fetchedContent;
  $content = fetchedContent;
</script>

<slot />
