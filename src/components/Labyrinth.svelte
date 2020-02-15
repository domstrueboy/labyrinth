<script>
  import Cell from './Cell.svelte';
  import { commands } from '../stores.js';

  import checkIfInField from '../functions/checkIfInField.js';
  import checkIfWin from '../functions/checkIfWin.js';

  let grid = [
    [0, 0, 0, 1, 3],
    [0, 0, 1, 1, 0],
    [1, 1, 1, 0, 0],
    [1, 0, 0, 0, 0],
    [1, 1, 0, 0, 0],
    [0, 1, 1, 0, 0],
    [0, 0, 1, 1, 2],
  ];
  let rows = grid.length;
  let cols = grid[0].length;

  let indexY = grid.findIndex(row => row.includes(2));
  let indexX = grid[indexY].findIndex(col => col === 2);

  let posX, posY;

  $: posX = indexX + 1;
  $: posY = indexY + 1;

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
                alert('Победа!');
              }
            } else {
              alert('Вы вышли за пределы поля!');
            }
            break;
          case 'right':
            newX = indexX + 1;
            if (checkIfInField(grid, newX, indexY)) {
              indexX += 1;
              if (checkIfWin(grid, indexX, indexY)) {
                alert('Победа!');
              }
            } else {
              alert('Вы вышли за пределы поля!');
            }
            break;
          case 'up':
            newY = indexY - 1;
            if (checkIfInField(grid, indexX, newY)) {
              indexY -= 1;
              if (checkIfWin(grid, indexX, indexY)) {
                alert('Победа!');
              }
            } else {
              alert('Вы вышли за пределы поля!');
            }
            break;
          case 'down':
            newY = indexY + 1;
            if (checkIfInField(grid, indexX, newY)) {
              indexY += 1;
              if (checkIfWin(grid, indexX, indexY)) {
                alert('Победа!');
              }
            } else {
              alert('Вы вышли за пределы поля!');
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
  style="--rows:{rows};--columns:{cols}"
>
  {#each grid as row, y}
    {#each row as cellCode, x}
      <Cell {cellCode} />
    {/each}
  {/each}
  <div
    class="chip"
    style="--pos-x:{posX};--pos-y:{posY}"
  >
  </div>
</div>

<style>
  .wrapper {
    flex: 1;
    display: grid;
    grid-template-rows: repeat(var(--rows), 1fr);
    grid-template-columns: repeat(var(--columns), 1fr);
    grid-column-gap: 2px;
    grid-row-gap: 2px;
    padding: 8px;
    margin: auto;
    position: relative;
  }
  .chip {
    position: absolute;
    grid-column-start: var(--pos-x);
    grid-column-end: var(--pos-x);
    grid-row-start: var(--pos-y);
    grid-row-end: var(--pos-y);
    width: 80%;
    height: 80%;
    background: black;
    border-radius: 50%;
    margin-left: 10%;
    margin-top: 10%;
  }
</style>