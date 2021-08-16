<script context="module">
  export async function load({ context }) {
    if (context.fetchedUser) {
      return {
        props: {
          fetchedUser: context.fetchedUser
        }
      };
    }

    return {};
  }
</script>

<script>
  import { tick } from "svelte";
  import { user as userStore } from "$lib/store";
  import { session } from "$app/stores";
  import { goto } from "$app/navigation";

  export let fetchedUser;
  $: user = $userStore || fetchedUser;

  function setCookie(name, value) {
    document.cookie = name + "=" + value + "; max-age=31536000; path=/";
  }

  function login() {
    setCookie("jwt", "abc");
    $session.jwt = "abc";
    tick().then(() => goto("/protected"));
  }
</script>

<h1>Welcome to SvelteKit</h1>

{#if user}
  <p>
    <a href="/protected">protected</a>
  </p>
{:else}
  <button on:click={login}>Log in</button>
{/if}
