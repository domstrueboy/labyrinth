<script>
  import Cell from './Cell.svelte';
  import { isAppStarted, content, commands, win, level, result } from '../stores.js';

  import checkIfInField from '../functions/checkIfInField.js';
  import checkIfWin from '../functions/checkIfWin.js';

  import { onMount } from 'svelte';

  let grid = [
    [2, 1],
    [1, 3],
  ];

  let rows = grid.length;
  let cols = grid[0].length;

  let w, h;

  let indexY = 0;
  let indexX = 0;

  let posX, posY;

  onMount(() => loadLevel($level));

  $: posX = indexX + 1;
  $: posY = indexY + 1;
  $: size = Math.min(w / cols, h / rows) - 4 + 'px';
  $: if ($result === null) {
    loadLevel($level)
      .catch((err) => {
        level.set(1);
        loadLevel($level);
      });
  }

  async function loadLevel(level) {
    grid = (await import(`../levels/level${level}.js`)).default;

    // reset everything in the store
    isAppStarted.set(false);
    content.set('');
    commands.set([]);
    win.set(false);
    result.set(null);

    rows = grid.length;
    cols = grid[0].length;

    indexY = grid.findIndex(row => row.includes(2));
    indexX = grid[indexY].findIndex(col => col === 2);
  }

  function methodThatReturnsAPromise(command) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let newX, newY;
        switch (command) {
          case 'left':
            newX = indexX - 1;
            if (checkIfInField(grid, newX, indexY)) {
              indexX -= 1;
              if (checkIfWin(grid, indexX, indexY)) {
                win.set(true);
                result.set('win');
              }
            } else {
              isAppStarted.set(false);
              result.set('lose');
            }
            break;
          case 'right':
            newX = indexX + 1;
            if (checkIfInField(grid, newX, indexY)) {
              indexX += 1;
              if (checkIfWin(grid, indexX, indexY)) {
                win.set(true);
                result.set('win');
              }
            } else {
              result.set('lose');
            }
            break;
          case 'up':
            newY = indexY - 1;
            if (checkIfInField(grid, indexX, newY)) {
              indexY -= 1;
              if (checkIfWin(grid, indexX, indexY)) {
                win.set(true);
                result.set('win');
              }
            } else {
              result.set('lose');
            }
            break;
          case 'down':
            newY = indexY + 1;
            if (checkIfInField(grid, indexX, newY)) {
              indexY += 1;
              if (checkIfWin(grid, indexX, indexY)) {
                win.set(true);
                result.set('win');
              }
            } else {
              result.set('lose');
            }
            break;
        }
        resolve();
      }, 500);
    });
  }

  $: if ($commands.length > 0) {
    $commands.reduce((accumulatorPromise, command) => {
      return accumulatorPromise.then(() => {
        return methodThatReturnsAPromise(command);
      });
    }, Promise.resolve());
  }
</script>

<div
  class="wrapper"
  style="--rows:{rows}; --columns:{cols}; --size:{size}"
>
  <div
    class="field"
    bind:clientWidth={w}
    bind:clientHeight={h}
  >
    {#each grid as row, y}
      {#each row as cellCode, x}
        <Cell {cellCode} size={size} />
      {/each}
    {/each}
    <div
      class="chip"
      style="--pos-x:{posX};--pos-y:{posY}"
    >
    </div>
  </div>
</div>

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