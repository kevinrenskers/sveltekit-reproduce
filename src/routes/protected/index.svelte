<script context="module">
  export async function load({ context }) {
    if (context) {
      return {
        props: {
          fetchedContent: context.fetchedContent,
          fetchedUser: context.fetchedUser
        }
      };
    }

    return {};
  }
</script>

<script>
  import { user as userStore, content as contentStore } from "$lib/store";
  export let fetchedContent;
  export let fetchedUser;
  $: content = $contentStore || fetchedContent;
  $: user = $userStore || fetchedUser;
</script>

<p>
  Hello {user}! Reload your browser and you'll see the old content briefly
  appear.
</p>
<p>{content}</p>

<p>
  <a href="/protected/subpage">subpage</a>
</p>
