<script context="module">
  import { get } from "svelte/store";
  import { content } from "$lib/store";

  export async function load({ fetch }) {
    console.log("RUNNING LOAD");

    const storedContent = get(content);

    if (!storedContent) {
      console.log("FETCHING CONTENT!");

      // In the real app it would fetch content from a remote server

      return {
        props: {
          fetchedContent: new Date().toISOString()
        }
      };
    }

    return {};
  }
</script>

<script>
  export let fetchedContent;

  if (fetchedContent) {
    $content = fetchedContent;
  }
</script>

<slot />
