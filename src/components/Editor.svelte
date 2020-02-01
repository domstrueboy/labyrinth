<script>
  import { isAppStarted } from '../stores.js';

  let editor;
  let content;
  
  $: if ($isAppStarted) {
    console.log('start the app', editor.innerHTML);
  }

  $: console.log('input handling (lint, suggestions, etc)', content);
</script>

<div
  bind:this={editor}
  bind:innerHTML={content}
  contenteditable="true"
  class="wrapper"
  autofocus
>
</div>

<style>
  .wrapper {
    flex: 1;
    background: lightgray;
    padding: 8px;
    font-size: 24px;
    font-family: 'Courier New', Courier, monospace;
    font-weight: bold;
    color: grey;
    outline: none;
  }
</style>