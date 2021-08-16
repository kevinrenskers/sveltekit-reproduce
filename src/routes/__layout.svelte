<script context="module">
  export async function load({ fetch }) {
    const resp = await fetch('/data.json')
    const data = await resp.json()
    return {
      props: {
        data
      }
    }
  }
</script>

<script>
  import { items } from '$lib/store'
  import NavBar from '$lib/NavBar.svelte'
  export let data = []

  $items = data
</script>

<style>
  div {
    border: 1px solid #ccc;
    border-radius: 8px;
    margin: 16px 0;
    padding: 8px;
  }
</style>

<NavBar />

<p>You must be signed in to view items</p>
<div><slot /></div>