<script context="module">
  import { browser } from "$app/env";
  import { get } from "svelte/store";
  import { user } from "$lib/store";

  export async function load({ fetch, session }) {
    if (!session.jwt) {
      return {
        props: {
          fetchedUser: false
        }
      };
    }

    const storedUser = get(user);
    if (browser && storedUser) {
      return {
        props: {
          fetchedUser: storedUser
        }
      };
    }

    const res = await fetch("/user.json");

    if (browser) {
      return {
        props: {
          fetchedUser: await res.text()
        }
      };
    } else {
      const fetchedUser = await res.text();
      return {
        props: {
          fetchedUser: fetchedUser
        },
        context: {
          fetchedUser: fetchedUser
        }
      };
    }
  }
</script>

<script>
  import Navbar from "$lib/Navbar.svelte";

  export let fetchedUser;
  if (browser && fetchedUser) {
    user.set(fetchedUser);
  }
</script>

<Navbar user={fetchedUser} />
<slot />
