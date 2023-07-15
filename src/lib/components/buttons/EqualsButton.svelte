<script lang="ts">
	import Equals from '$lib/assets/Equals.svelte';
	import { createEventDispatcher } from 'svelte';

	export let width = 100;
	export let height = 100;

	const dispatch = createEventDispatcher();
	function onClick() {
		dispatch('click');
	}
</script>

<button
	class="hover:fill-red-500 hover:scale-110 transition duration-300 ease-in-out"
	on:click={onClick}
>
	<Equals {width} {height} />
</button>
