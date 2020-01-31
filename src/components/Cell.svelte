<script>
  import { onMount } from 'svelte';

  export let isPath;

  let cell;
  let width;

  onMount(() => {
    width = cell.offsetWidth + 'px';
  });
</script>

<div
  class="{isPath ? 'path' : ''}"
  bind:this={cell}
  style="--height:{width}"
>
</div>

<style>
  div {
    height: var(--height);
  }
  .path {
    background: tomato;
  }
</style>