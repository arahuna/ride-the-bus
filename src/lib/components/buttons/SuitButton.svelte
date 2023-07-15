<script lang="ts">
	import SuitSpadeFill from 'svelte-bootstrap-icons/lib/SuitSpadeFill.svelte';
	import SuitClubFill from 'svelte-bootstrap-icons/lib/SuitClubFill.svelte';
	import SuitDiamondFill from 'svelte-bootstrap-icons/lib/SuitDiamondFill.svelte';
	import SuitHeartFill from 'svelte-bootstrap-icons/lib/SuitHeartFill.svelte';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher<{
		click: string;
	}>();

	export let suits: ('H' | 'D' | 'C' | 'S')[] = ['H', 'D'];
	export let colour: 'red' | 'black' = 'red';
	export let iconSize = 48;

	function onClick() {
		dispatch('click', colour);
	}
</script>

<div class="relative">
	<button
		on:click={onClick}
		disabled={$$props.disabled}
		class={$$props.class +
			(colour === 'red'
				? /** Depending on the suit, we have a diff bg color*/
				  ' text-red-500 border-red-500 after:bg-red-500 hover:text-white focus:text-white'
				: ' text-black border-black after:bg-black hover:text-white focus:text-white') +
			/** These are the main button classes */
			' flex flex-row justify-center items-center p-5 max-w-[150px] max-h-[150px] flex-wrap bg-transparent border-4 rounded-lg aspect-square transition duration-100 delay-100 ease-in' +
			/** These control the :after */
			' after:max-w-[150px] after:max-h-[150px] after:h-full after:w-full after:absolute after:scale-0 after:rounded-3xl hover:after:rounded-lg focus:after:rounded-lg hover:after:scale-100 focus:after:scale-100 after:transition-all after:duration-300 after:ease-in-out'}
	>
		{#each suits as suit}
			{#if suit === 'H'}
				<SuitHeartFill class="z-10" height={iconSize} width={iconSize} />
			{:else if suit === 'D'}
				<SuitDiamondFill class="z-10" height={iconSize} width={iconSize} />
			{:else if suit === 'C'}
				<SuitClubFill class="z-10" height={iconSize} width={iconSize} />
			{:else if suit === 'S'}
				<SuitSpadeFill class="z-10" height={iconSize} width={iconSize} />
			{/if}
		{/each}
	</button>
</div>
