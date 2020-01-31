<script>
  import { onMount } from 'svelte';

  let cell;
  export let width = '100px';

  onMount(() => {
    width = cell.offsetWidth + 'px';
  });
</script>

<div
  bind:this={cell}
  height={width}
  style="--height:{width}"
>
</div>

<style>
  div {
    box-sizing: border-box;
    border: 1px solid gray;
    height: var(--height);
  }
</style>