<script context="module">
  export async function load({ page, session }) {
    if (session) {
      return {}
    } else {
      return {
        status: 302,
        redirect: '/'
      }
    }
  }
</script>

<script>
  import { selected, item } from '$lib/store'
  import { page } from '$app/stores'

  selected.set($page.params.id)
</script>

<a href="/">Home</a>

<h2>{$item.title}</h2>
<p>{$item.content}</p>