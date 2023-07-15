<script lang="ts">
	import type { Card } from '$lib/schemas/CardSchema';
	import { cubicOut } from 'svelte/easing';
	import CardBack from '$lib/assets/CardBack.png';
	import { fly, fade } from 'svelte/transition';

	export let showCard = false;
	export let card: Card;
	export let delay = 0;
</script>

<div
	class="flex flex-col mx-4 my-2"
	in:fade={{
		duration: 500
	}}
>
	<div class="rounded-lg p-4 bg-yellow-200">
		<div class="w-full h-full flip-card" class:flip={showCard}>
			{#if card}
				<div
					class="flip-card-inner shadow-md rounded-xl"
					in:fly={{ y: '-100%', duration: 1000, easing: cubicOut, delay: delay }}
				>
					<div class="flip-card-front">
						{#if !showCard}
							<img
								class="w-full h-full rounded-lg max-h-md border-black border"
								src={CardBack}
								alt="card back"
								out:fade={{ delay: 250, duration: 0 }}
							/>
						{/if}
					</div>
					<div class="flip-card-back">
						{#if showCard}
							<img class="w-full h-full rounded-lg" src={card.image} alt={card.code} />
						{/if}
					</div>
				</div>
			{/if}
		</div>
	</div>
</div>

<style scoped>
	.flip-card {
		width: 200px;
		height: 277px;
		perspective: 1000px; /* Remove this if you don't want the 3D effect */
	}

	/* This container is needed to position the front and back side */
	.flip-card-inner {
		position: relative;
		width: 100%;
		height: 100%;
		text-align: center;
		transition: transform 0.8s;
		transform-style: preserve-3d;
	}

	/* Do an horizontal flip when you move the mouse over the flip box container */
	.flip .flip-card-inner {
		transform: rotateY(180deg);
	}

	/* Position the front and back side */
	.flip-card-front,
	.flip-card-back {
		position: absolute;
		width: 100%;
		height: 100%;
		-webkit-backface-visibility: hidden; /* Safari */
		backface-visibility: hidden;
	}

	/* Style the back side */
	.flip-card-back {
		transform: rotateY(180deg);
	}
</style>
