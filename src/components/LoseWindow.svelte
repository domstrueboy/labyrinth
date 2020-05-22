<script>
  import Button from './Button.svelte';

  export let retryHandler;
</script>

<style>
  h1 {
    width: 100%;
    text-align: center;
  }
</style>


<h1>Ты свалилась с дорожки!</h1>
<Button title="Заново" icon="img/icons/refresh-24px.svg" handler={retryHandler} />
