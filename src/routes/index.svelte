<script>
  import { items } from "$lib/store";
</script>

<h1>Items:</h1>
<ul>
  {#each $items as item}
    <li>
      <a href="/{item.id}">{item.title}</a>
      : {item.content}
    </li>
  {/each}
</ul>
