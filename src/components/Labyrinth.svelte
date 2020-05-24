<script>
  import Cell from "./Cell.svelte";
  import { content, commands, level, status } from "../stores.js";

  import checkIfInField from "../functions/checkIfInField.js";
  import checkIfWin from "../functions/checkIfWin.js";

  import { onMount } from "svelte";

  let grid = [[2, 1], [1, 3]];

  let rows = grid.length;
  let cols = grid[0].length;

  let w, h;

  let indexY = 0;
  let indexX = 0;

  let posX, posY;

  onMount(() => loadLevel($level));

  $: posX = indexX + 1;
  $: posY = indexY + 1;
  $: size = Math.min(w / cols, h / rows) - 4 + "px";
  $: if ($status === null) {
    loadLevel($level).catch(err => {
      level.set(1);
      loadLevel($level);
    });
  }

  async function loadLevel(level) {
    grid = (await import(`../levels/level${level}.js`)).default;

    // reset everything in the store
    content.set("");
    commands.set([]);
    status.set(null);

    rows = grid.length;
    cols = grid[0].length;

    indexY = grid.findIndex(row => row.includes(2));
    indexX = grid[indexY].findIndex(col => col === 2);
  }

  function methodThatReturnsAPromise(command, i) {
    return new Promise((resolve, reject) => {
      switch (command) {
        case 'left':
          indexX--; break;
        case 'right':
          indexX++; break;
        case 'up':
          indexY--; break;
        case 'down':
          indexY++; break;
      }
      if (checkIfInField(grid, indexX, indexY)) {
        if (checkIfWin(grid, indexX, indexY)) {
          status.set('win');
        }
      } else {
        status.set('lose');
      }
      setTimeout(() => {
        resolve();
      }, 500);
    });
  }

  $: if ($commands.length > 0) {
    status.set('started');
    $commands.reduce((accumulatorPromise, command, index) => {
      return accumulatorPromise.then(() => {
        return methodThatReturnsAPromise(command);
      });
    }, Promise.resolve());
  }
</script>

<style>
  .wrapper {
    flex: 1;
    box-sizing: border-box;
    width: 50vw;
    padding: 6px 6px 8px 8px;
  }
  .field {
    width: 100%;
    height: 100%;
    max-height: 100vh;
    display: grid;
    justify-content: center;
    align-content: center;
    grid-template-rows: repeat(var(--rows), var(--size));
    grid-template-columns: repeat(var(--columns), var(--size));
    grid-column-gap: 2px;
    grid-row-gap: 2px;
    position: relative;
    background: whitesmoke;
    padding: 8px;
    box-sizing: border-box;
  }
  .chip {
    position: absolute;
    grid-column-start: var(--pos-x);
    grid-column-end: var(--pos-x);
    grid-row-start: var(--pos-y);
    grid-row-end: var(--pos-y);
    width: 80%;
    height: 80%;
    background: rgb(45, 45, 45);
    border-radius: 50%;
    margin-left: 10%;
    margin-top: 10%;
  }
</style>

<div class="wrapper" style="--rows:{rows}; --columns:{cols}; --size:{size}">
  <div class="field" bind:clientWidth={w} bind:clientHeight={h}>
    {#each grid as row, y}
      {#each row as cellCode, x}
        <Cell {cellCode} {size} />
      {/each}
    {/each}
    <div class="chip" style="--pos-x:{posX};--pos-y:{posY}" />
  </div>
</div>
