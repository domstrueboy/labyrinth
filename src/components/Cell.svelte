<script>
  import { onMount } from 'svelte';

  export let cellCode;

  let cell;
  let width;

  let cellTypeByCode = ['none', 'path', 'start', 'finish'];

  onMount(() => {
    width = cell.offsetWidth + 'px';
  });
</script>

<div
  class="{cellTypeByCode[cellCode]}"
  bind:this={cell}
  style="--height:{width}"
>
</div>

<style>
  div {
    height: var(--height);
  }
  .path {
    background: lightpink;
  }
  .start {
    background: lightgreen;
  }
  .start::after {
    content: 'Start'
  }
  .finish {
    background: salmon;
  }
  .finish::after {
    content: 'Finish'
  }
</style>