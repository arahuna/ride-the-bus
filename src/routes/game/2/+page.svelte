<script>
	import { fly } from 'svelte/transition';
	import SuitButton from '$lib/components/buttons/SuitButton.svelte';
	import { onMount } from 'svelte';

	let ready = false;
	onMount(() => {
		ready = true;
	});
</script>

{#if ready}
	<div
		class="flex justify-center w-full flex-col items-center
"
	>
		<h1
			class="font-semibold text-2xl text-white text-center font-noto-sans"
			transition:fly={{
				y: 100,
				duration: 500
			}}
		>
			Is the first card a red or black card?
		</h1>
		<div class="flex flex-row mt-4">
			<div
				transition:fly={{
					x: -50,
					duration: 1000,
					delay: 500
				}}
			>
				<SuitButton suits={['H', 'D']} colour="red" class="mr-3" />
			</div>
			<div
				transition:fly={{
					x: 50,
					duration: 1000,
					delay: 500
				}}
			>
				<SuitButton suits={['C', 'S']} colour="black" class="ml-3" />
			</div>
		</div>
	</div>
{/if}
