<script lang="ts">
	import type { Card } from '$lib/schemas/CardSchema';
	import { onMount } from 'svelte';
	import CardContainer from './CardContainer.svelte';

	export let currentQuestion: number = -1;
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

	onMount(() => {
		setTimeout(() => {
			currentQuestion++;
		}, 1500);
		setTimeout(() => {
			currentQuestion++;
		}, 3000);
	});
</script>

<div class="flex flex-col sm:flex-row justify-between">
	{#each cards as card, i}
		<CardContainer {card} showCard={i <= currentQuestion} />
	{/each}
</div>
