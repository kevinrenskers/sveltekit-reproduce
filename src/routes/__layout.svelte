<script context="module">
  import { get } from "svelte/store";
  import { user } from "$lib/store";

  export async function load({ fetch, session }) {
    console.log("load", session);

    if (!session.jwt) {
      return {
        props: {
          fetchedUser: false
        }
      };
    }

    const storedUser = get(user);
    if (storedUser) {
      return {
        props: {
          fetchedUser: storedUser
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
  import Navbar from "$lib/Navbar.svelte";

  export let fetchedUser;
  if (fetchedUser) {
    user.set(fetchedUser);
  }
</script>

<Navbar />
<slot />
