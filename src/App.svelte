<script>
	import Editor from './components/Editor.svelte';
	import Labyrinth from './components/Labyrinth.svelte';
	import MainButton from './components/MainButton.svelte';
</script>

<main>
	<Editor />
	<Labyrinth />
	<MainButton />
</main>

<style>
	main {
		height: 100vh;
		width: 100vw;
		display: flex;
		position: relative;
	}
</style>