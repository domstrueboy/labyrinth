<script>
  export let title;
  export let icon;
  export let handler;
  export let disabled = false;
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
  button:disabled {
    opacity: .3;
  }
  img {
    display: block;
    width: 60px;
    height: 60px;
  }
</style>

<button {title} on:click={handler} {disabled}>
  <img src={icon} alt="" />
</button>
