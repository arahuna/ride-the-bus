<script lang="ts">
	import CardList from '$lib/components/cards/CardList.svelte';
	import { setContext } from 'svelte';
	import type { Card } from '$lib/schemas/CardSchema';
	import type { LayoutData } from './$types';
	import { writable } from 'svelte/store';

	export let data: LayoutData;

	const flippedCards = writable(0);
	const score = writable(0);
	const cards = writable<Card[]>([]);
	$: cards.set(data.cards);

	setContext('flippedCards', flippedCards);
	setContext('score', score);
	setContext('cards', cards);
</script>

<div class="flex flex-col">
	<CardList cards={$cards} flippedCards={$flippedCards} />
	<div class="flex items-center flex-row h-full min-h-[250px]">
		<slot />
	</div>
</div>
