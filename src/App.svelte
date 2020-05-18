<script>
	import Editor from './components/Editor.svelte';
	import Labyrinth from './components/Labyrinth.svelte';
	import MainButton from './components/MainButton.svelte';
	import Alert from './components/Alert.svelte';

	import { win, level } from './stores.js';
	
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

	<!-- {#if $win} -->
		<Alert>
			<h1>Победа!</h1>
			<button on:click={handleClick} title="Retry">
				<img src="img/icons/refresh-24px.svg" alt="">
			</button>
			<button on:click={handleClick} title="Next">
				<img src="img/icons/redo-24px.svg" alt="">
			</button>
		</Alert>
	<!-- {/if} -->
</main>

<style>
	main {
		height: 100vh;
		width: 100vw;
		display: flex;
		position: relative;
	}
</style>