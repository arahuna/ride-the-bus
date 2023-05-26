<script lang="ts">
	import CardList from '$lib/components/cards/CardList.svelte';
	import { onMount } from 'svelte';
	import type { Card } from '$lib/schemas/CardSchema';

	let currentQuestion = -1;

	const cards: Card[] = [
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

	let ready = false;
	onMount(() => {
		ready = true;
	});
</script>

{#if ready}
	<div class="flex flex-col">
		<CardList {cards} {currentQuestion} />
		<div class="flex flex-row">
			<slot />
		</div>
	</div>
{/if}
