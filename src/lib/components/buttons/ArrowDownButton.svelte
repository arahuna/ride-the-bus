<script lang="ts">
	import ArrowDown from '$lib/assets/ArrowDown.svelte';
	import { createEventDispatcher } from 'svelte';

	export let width = 100;
	export let height = 100;

	const dispatch = createEventDispatcher();
	function onClick() {
		dispatch('click');
	}
</script>

<button
	class="hover:fill-red-500 hover:scale-105 hover:translate-y-5 transition duration-300 ease-in-out"
	on:click={onClick}
>
	<ArrowDown {width} {height} />
</button>

<style scoped>
</style>
