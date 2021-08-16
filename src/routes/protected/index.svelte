<script context="module">
  export async function load({ context }) {
    if (context.fetchedContent) {
      return {
        props: {
          fetchedContent: context.fetchedContent
        }
      };
    }

    return {};
  }
</script>

<script>
  import { content as contentStore } from "$lib/store";
  export let fetchedContent;
  $: content = $contentStore || fetchedContent;
</script>

<p>Reload your browser and you'll see the old content briefly appear.</p>
<p>{content}</p>

<p>
  <a href="/protected/subpage">subpage</a>
</p>
