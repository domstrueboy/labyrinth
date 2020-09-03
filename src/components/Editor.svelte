<script>
  import { content, commands, status } from '../stores.js';
  import parser from '../functions/parser.js';
  import lexer from '../functions/lexer.js';
  import runner from '../functions/runner.js';

  let editor;
  
  $: if ($status === 'started') {
    const parsed = parser($content);
    // console.log(parsed);
    const lexed = lexer(parsed);
    // console.log(lexed);
    const separateCommands = runner(lexed);
    // console.log(separateCommands);
    commands.set(separateCommands);
  }
</script>

<div
  bind:this={editor}
  bind:innerHTML={$content}
  contenteditable="true"
  class="wrapper"
  autofocus
>
</div>

<style>
  .wrapper {
    box-sizing: border-box;
    width: 50vw;
    height: 100vh;
    overflow: auto;
    background: rgb(45, 45, 45);
    padding: 8px;
    font-size: 24px;
    font-family: 'Anonymous Pro', monospace;
    font-weight: bold;
    color: whitesmoke;
    outline: none;
  }
</style>