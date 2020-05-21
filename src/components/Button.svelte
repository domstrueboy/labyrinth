<script>
  export let title;
  export let icon;
  export let handler;
</script>

<style>
  button {
    margin: 0;
    width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    box-shadow: 4px 4px 4px rgba(1, 1, 1, .3);
    cursor: pointer;
  }
  button:active {
    box-shadow: 2px 2px 2px rgba(1, 1, 1, .3);
    background: whitesmoke;
  }
  img {
    display: block;
    width: 60px;
    height: 60px;
  }
</style>

<button {title} on:click={handler}>
  <img src={icon} alt="" />
</button>
