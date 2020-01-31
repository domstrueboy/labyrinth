<script>
  import Cell from './Cell.svelte';

  let grid = [
    [0, 0, 0, 1, 0],
    [0, 0, 1, 1, 0],
    [1, 1, 1, 0, 0],
    [1, 0, 0, 0, 0],
    [1, 1, 0, 0, 0],
    [0, 1, 0, 0, 0],
    [0, 1, 0, 0, 0],
  ];
  export let rows = grid.length;
  export let cols = grid[0].length;
</script>

<div
  class="wrapper"
  style="--rows:{rows};--columns:{cols}"
>
  {#each grid as row, r}
    {#each row as cell, c}
      <Cell />
    {/each}
  {/each}
</div>

<style>
  .wrapper {
    flex: 1;
    display: grid;
    grid-template-rows: repeat(var(--rows), 1fr);
    grid-template-columns: repeat(var(--columns), 1fr);
    padding: 8px;
    margin: auto;
  }
</style>