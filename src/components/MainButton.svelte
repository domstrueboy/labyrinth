<script>
  import { isAppStarted } from '../stores.js';

  function handleClick() {
    isAppStarted.set(true);
  }
</script>

<button on:click={handleClick}>СТАРТ</button>

<style>
  button {
    position: absolute;
    bottom: 13px;
    left: 10px;
    cursor: pointer;
    margin: 0;
    font-size: 32px;
    font-weight: 200;
    box-shadow: 4px 4px 4px gray;
    border: 0;
    background: white;
  }
  button:active {
    box-shadow: 2px 2px 2px gray;
    background: white;
  }
</style>