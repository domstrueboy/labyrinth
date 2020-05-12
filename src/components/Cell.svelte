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
    border-radius: 20px;
  }
  .path {
    background: plum;
  }
  .start {
    background: peru;
  }
  .finish {
    background: orangered;
  }
</style>