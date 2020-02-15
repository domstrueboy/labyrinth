<script>
  import { isAppStarted, commands } from '../stores.js';
  import parser from '../functions/parser.js';
  import lexer from '../functions/lexer.js';
  import runner from '../functions/runner.js';

  let editor;
  let content;
  
  $: if ($isAppStarted) {
    const parsed = parser(editor.innerHTML);
    const lexed = lexer(parsed);
    console.log(lexed);
    const separateCommands = runner(lexed);
    console.log(separateCommands);
    commands.set(separateCommands);
  }

  // $: console.log('input handling (lint, suggestions, etc)', content);
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