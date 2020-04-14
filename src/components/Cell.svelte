<script>
  export let cellCode;
  export let size;

  let cell;

  let cellTypeByCode = ['none', 'path', 'start', 'finish'];
</script>

<div
  class="{cellTypeByCode[cellCode]}"
  bind:this={cell}
  style="--size:{size}"
>
</div>

<style>
  div {
    width: var(--size);
    height: var(--size);
  }
  .path {
    background: lightpink;
  }
  .start {
    background: lightgreen;
  }
  .finish {
    background: salmon;
  }
</style>