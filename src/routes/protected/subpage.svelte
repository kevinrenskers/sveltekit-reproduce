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
  Hi {user}, this should show the same content
  <b>without doing another request to the REST server.</b>
</p>
<p>{content}</p>

<p>
  <a href="/protected">back</a>
</p>
