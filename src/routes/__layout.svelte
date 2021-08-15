<script context="module">
  import { get } from "svelte/store";
  import { content } from "$lib/store";

  export async function load({ fetch }) {
    console.log("RUNNING LOAD");

    const storedContent = get(content);

    if (!storedContent) {
      console.log("FETCHING CONTENT!");
      const res = await fetch("/index.json");

      return {
        props: {
          fetchedContent: await res.text()
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
