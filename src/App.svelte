<script>
	import Editor from './components/Editor.svelte';
	import Labyrinth from './components/Labyrinth.svelte';
</script>

<main>
	<Editor />
	<Labyrinth />
</main>

<style>
	main {
		height: 100vh;
		width: 100vw;
		display: flex;
	}
</style>