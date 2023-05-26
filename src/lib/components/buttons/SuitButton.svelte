<script lang="ts">
	import SuitSpadeFill from 'svelte-bootstrap-icons/lib/SuitSpadeFill.svelte';
	import SuitClubFill from 'svelte-bootstrap-icons/lib/SuitClubFill.svelte';
	import SuitDiamondFill from 'svelte-bootstrap-icons/lib/SuitDiamondFill.svelte';
	import SuitHeartFill from 'svelte-bootstrap-icons/lib/SuitHeartFill.svelte';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	export let suits: ('H' | 'D' | 'C' | 'S')[] = ['H'];
	export let color: 'red' | 'black' = 'black';
	$: iconSize = 48;

	function onClick() {
		dispatch('click');
	}
</script>

<div class="relative">
	<button
		on:click={onClick}
		class={(color === 'red'
			? 'text-red-500 border-red-500 after:bg-red-500 hover:text-white focus:text-white'
			: 'text-black border-black after:bg-black hover:text-white focus:text-white') +
			' flex flex-row justify-center items-center p-5 max-w-[150px] max-h-[150px] flex-wrap bg-transparent border-4 rounded-lg aspect-square transition duration-100 delay-200 ease-in' +
			' after:w-full after:h-full after:absolute after:scale-0 after:rounded-3xl hover:after:rounded-lg focus:after:rounded-lg hover:after:scale-100 focus:after:scale-100 after:transition-all after:duration-[350ms] after:ease-in-out'}
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
