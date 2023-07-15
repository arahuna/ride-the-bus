<script lang="ts">
	import SuitButton from '../buttons/SuitButton.svelte';
	import { createEventDispatcher, getContext } from 'svelte';
	import type { Writable } from 'svelte/store';
	import type { Card } from '$lib/schemas/CardSchema';
	import QuestionTitle from '$lib/components/QuestionTitle.svelte';

	export let startDelay = 0;

	const dispatch = createEventDispatcher<{
		answered: boolean;
	}>();

	const cardStore: Writable<Card[]> = getContext('cards');

	let correctAnswer: string;
	cardStore.subscribe((cards) => {
		if (cards[0].suit === 'HEARTS' || cards[0].suit === 'DIAMONDS') {
			correctAnswer = 'red';
		} else {
			correctAnswer = 'black';
		}
	});

	function answerQuestion(answer: CustomEvent<string>): void {
		dispatch('answered', answer.detail === correctAnswer);
	}
</script>

<div class="flex justify-center w-full flex-col items-center">
	<QuestionTitle
		question={{
			number: 1,
			text: 'Is the first card red or black?'
		}}
		transitionDelay={startDelay}
	/>
	<div class="flex flex-row mt-4">
		<SuitButton suits={['H', 'D']} colour="red" class="mr-3" on:click={answerQuestion} />
		<SuitButton suits={['C', 'S']} colour="black" class="ml-3" on:click={answerQuestion} />
	</div>
</div>
