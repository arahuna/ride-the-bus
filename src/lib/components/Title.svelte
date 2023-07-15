<script lang="ts">
	import { quintOut } from 'svelte/easing';
	import { crossfade, fade } from 'svelte/transition';

	export let height = 'h-64';
	export let minimized = false;

	const [send, receive] = crossfade({
		duration: 700,
		easing: quintOut
	});
</script>

<div class={height + ' text-white flex flex-col justify-between items-center font-bold'}>
	<div>
		{#if minimized}
			<div class="relative text-6xl" out:fade in:send={{ key: 'title' }}>Ride The Bus</div>
		{/if}
	</div>
	<div>
		{#if !minimized}
			<div
				class="relative text-7xl"
				out:receive={{ key: 'title' }}
				in:fade={{
					duration: 700
				}}
			>
				Ride The Bus
			</div>
		{/if}
	</div>
</div>

<button
	class="border p-2 bg-white"
	on:click={() => {
		minimized = !minimized;
	}}>Test</button
>

<style>
</style>
