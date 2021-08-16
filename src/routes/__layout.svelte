<script context="module">
  export async function load({ fetch, session }) {
    if (!session.jwt) {
      return {
        props: {
          fetchedUser: false
        }
      };
    }

    const res = await fetch("/user.json");

    return {
      props: {
        fetchedUser: await res.text()
      }
    };
  }
</script>

<script>
  import { user } from "$lib/store";
  import Navbar from "$lib/Navbar.svelte";

  export let fetchedUser;
  user.set(fetchedUser);
</script>

<Navbar />
<slot />
