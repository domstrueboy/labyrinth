<script>
  import { onMount } from 'svelte';

  export let isPath;

  let cell;
  export let width = '100px';

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
    box-sizing: border-box;
    border: 1px solid gray;
    height: var(--height);
  }
  .path {
    background: tomato;
  }
</style>