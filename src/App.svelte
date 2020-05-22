<script>
	import Editor from './components/Editor.svelte';
	import Labyrinth from './components/Labyrinth.svelte';
	import Button from './components/Button.svelte';
	import Alert from './components/Alert.svelte';
	import WinWindow from './components/WinWindow.svelte';
	import LoseWindow from './components/LoseWindow.svelte';

	import { isAppStarted, win, level, result } from './stores.js';

	function startHandler() {
    isAppStarted.set(true);
  }
	
	function nextHandler() {
		level.set($level + 1);
		win.set(false);
		result.set(null);
	}

	function retryHandler() {
		win.set(false);
		result.set(null);
	}
	
	$: document.title = `Уровень ${$level}`;
</script>

<main>
	<Editor />
	<Labyrinth />
	<div class="start-button">
		<Button title="Старт" icon="/img/icons/play_arrow-24px.svg" handler={startHandler} disabled={$isAppStarted} />
	</div>

	{#if $result === 'win'}
		<Alert>
			<WinWindow {nextHandler} {retryHandler} />
		</Alert>
	{:else if $result === 'lose'}
		<Alert>
			<LoseWindow {retryHandler} />
		</Alert>
	{/if}
</main>

<style>
	main {
		height: 100vh;
		width: 100vw;
		display: flex;
		position: relative;
	}
	.start-button {
		position: absolute;
    bottom: 13px;
    left: 10px;
	}
</style>