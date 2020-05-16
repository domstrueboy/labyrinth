<script>
	import Editor from './components/Editor.svelte';
	import Labyrinth from './components/Labyrinth.svelte';
	import MainButton from './components/MainButton.svelte';
	import Alert from './components/Alert.svelte';

	import { win, level } from './stores.js';

	console.log(document.title);
	
	function handleClick() {
		level.set($level + 1);
		win.set(false);
	}
	
	$: document.title = `Уровень ${$level}`;
</script>

<main>
	<Editor />
	<Labyrinth />
	<MainButton />

	{#if $win}
		<Alert>
			<span>Победа!</span>
			<button on:click={handleClick}>Next</button>
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
</style>