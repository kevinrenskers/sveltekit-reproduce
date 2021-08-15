<script>
  import { content, user } from "$lib/store";
  import { session } from "$app/stores";
  import { goto } from "$app/navigation";

  function setCookie(name, value) {
    document.cookie = name + "=" + value + "; max-age=31536000; path=/";
  }

  function login() {
    setCookie("jwt", "abc");
    $session.jwt = "abc";
    goto("/protected");
  }
</script>

<h1>Welcome to SvelteKit</h1>

{#if $user}
  <p>
    <a href="/protected">protected</a>
  </p>
{:else}
  <button on:click={login}>Log in</button>
{/if}
