<script lang="ts">
	import { getContext, onMount } from 'svelte';
	import type { Writable } from 'svelte/store';
	import Validation from '$lib/components/Validation.svelte';
	import QuestionOne from '$lib/components/Questions/QuestionOne.svelte';
	import { fade } from 'svelte/transition';

	const flippedCards: Writable<number> = getContext('flippedCards');

	let answered = false;
	let success = false;

	function evaluateResult(answer: CustomEvent<boolean>) {
		flippedCards.update((n) => n + 1);
		setTimeout(() => {
			success = answer.detail;
			answered = true;
		}, 1000);
	}
</script>

<div class="flex justify-center w-full h-full flex-col items-center">
	{#if !answered}
		<span in:fade={{ duration: 500, delay: 1000 }}>
			<QuestionOne on:answered={evaluateResult} />
		</span>
	{:else}
		<span in:fade={{ duration: 200 }}>
			<Validation {success} nextQuestion={2} />
		</span>
	{/if}
</div>
