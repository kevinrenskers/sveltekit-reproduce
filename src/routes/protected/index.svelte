<script context="module">
  // Forward all context to the props
  export async function load({ context }) {
    return { props: context };
  }
</script>

<script>
  import { user as userStore, content as contentStore } from "$lib/store";
  export let fetchedContent;
  export let fetchedUser;

  // The magic sauce: use the content in the store, but fallback to the context,
  // which is needed for SSR.
  $: content = $contentStore || fetchedContent;
  $: user = $userStore || fetchedUser;
</script>

<p>
  Hello {user}! Reload your browser and you'll see the old content briefly
  appear.
</p>
<p>{content}</p>

<p>
  <a href="/">home</a>
  <a href="/protected/subpage">subpage</a>
</p>
