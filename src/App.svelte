<script>
	import Editor from './components/Editor.svelte';
	import Labyrinth from './components/Labyrinth.svelte';
	import Button from './components/Button.svelte';
	import Alert from './components/Alert.svelte';
	import WinWindow from './components/WinWindow.svelte';
	import LoseWindow from './components/LoseWindow.svelte';

	import { content, level, status } from './stores.js';

	function startHandler() {
    status.set('started');
  }
	
	function nextHandler() {
		level.set($level + 1);
		status.set(null);
		content.set("");
	}

	function retryHandler() {
		status.set(null);
	}
	
	$: document.title = `Уровень ${$level}`;
</script>

<main>
	<Editor />
	<Labyrinth />
	<div class="start-button">
		<Button
			title="Старт"
			icon="img/icons/play_arrow-24px.svg"
			handler={startHandler}
			disabled={$status === 'started'}
		/>
	</div>

	{#if $status === 'win'}
		<Alert>
			<WinWindow {nextHandler} {retryHandler} />
		</Alert>
	{:else if $status === 'lose'}
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