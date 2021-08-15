<script>
  import { content } from "$lib/store";

  function changeContent() {
    $content = "CHANGED CONTENT";
  }
</script>

<h1>Welcome to SvelteKit</h1>
<p>{$content}</p>

<button on:click={changeContent}>Change content</button>

<p>
  <a href="/subpage">subpage</a>
</p>
