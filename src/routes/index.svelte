<script>
  import { content } from "$lib/store";

  function changeContent() {
    $content = new Date().toISOString();
  }
</script>

<h1>Welcome to SvelteKit</h1>
<p>{$content}</p>

<button on:click={changeContent}>Change content</button>

<p>
  <a href="/subpage">subpage</a>
</p>
