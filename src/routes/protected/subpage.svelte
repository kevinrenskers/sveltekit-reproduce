<script>
  import { content } from "$lib/store";
</script>

<p>
  This should show the same content
  <b>without doing another request to the REST server.</b>
</p>
<p>{$content}</p>

<p>
  <a href="/protected">back</a>
</p>
