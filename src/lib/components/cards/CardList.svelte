<script lang="ts">
	import type { Card } from '$lib/schemas/CardSchema';
	import CardContainer from './CardContainer.svelte';

	export let flippedCards = -1;
	export let cards: Card[] = [
		{
			code: '6H',
			image: 'https://deckofcardsapi.com/static/img/6H.png',
			images: {
				svg: 'https://deckofcardsapi.com/static/img/6H.svg',
				png: 'https://deckofcardsapi.com/static/img/6H.png'
			},
			value: '6',
			suit: 'HEARTS'
		},
		{
			code: '6H',
			image: 'https://deckofcardsapi.com/static/img/6H.png',
			images: {
				svg: 'https://deckofcardsapi.com/static/img/6H.svg',
				png: 'https://deckofcardsapi.com/static/img/6H.png'
			},
			value: '6',
			suit: 'HEARTS'
		},
		{
			code: '6H',
			image: 'https://deckofcardsapi.com/static/img/6H.png',
			images: {
				svg: 'https://deckofcardsapi.com/static/img/6H.svg',
				png: 'https://deckofcardsapi.com/static/img/6H.png'
			},
			value: '6',
			suit: 'HEARTS'
		}
	];
</script>

<div class="flex flex-col sm:flex-row justify-between">
	{#each cards as card, i}
		<CardContainer {card} showCard={i + 1 <= flippedCards} delay={i * 1000} />
	{/each}
</div>
