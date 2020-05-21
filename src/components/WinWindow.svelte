<script>
  import Button from './Button.svelte';

  export let nextHandler;
  export let retryHandler;
</script>

<style>
  h1 {
    width: 100%;
    text-align: center;
  }
</style>


<h1>Победа!</h1>
<Button title="Заново" icon="img/icons/refresh-24px.svg" handler={retryHandler} />
<Button title="Дальше" icon="img/icons/redo-24px.svg" handler={nextHandler} />
