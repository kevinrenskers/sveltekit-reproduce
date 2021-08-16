<script>
  export let user;
</script>

<header>
  {#if user}Logged in as {user}!{:else}Not logged in{/if}
</header>

<hr />
