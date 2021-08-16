<script>
  import { session } from '$app/stores'

  async function signIn() {
    const resp = await fetch('/auth.json', { method: 'post' })
    const data = await resp.json()

    $session = data
  }

  async function signOut() {
    await fetch('/auth.json', { method: 'delete' })
    $session = null
  }
</script>

<style>
  button {
    margin-right: 8px;
  }
</style>

<header>
{#if $session}
  <button on:click={signOut}>Sign Out</button>
  Signed in as {$session.name} ({$session.uid})
{:else}
  <button on:click={signIn}>Sign In</button>
  Anonymous visitor
{/if}
</header>