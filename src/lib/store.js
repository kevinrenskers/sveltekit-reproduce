import { derived, writable } from 'svelte/store'

export const auth = writable(null)

export const items = writable([])

export const selected = writable('')

export const item = derived(
  [items, selected],
  ([$items, $selected]) => $items.find(x => x.id === $selected)
)