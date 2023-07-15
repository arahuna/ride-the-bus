<script lang="ts">
	import { fly } from 'svelte/transition';
	import QuestionTitle from '$lib/components/QuestionTitle.svelte';
	import SuitButton from '$lib/components/buttons/SuitButton.svelte';
	import { onMount } from 'svelte';

	const question = {
		number: 3,
		text: 'What is the suit of the third card?'
	};
</script>

<div class="flex justify-center w-full flex-col items-center">
	<QuestionTitle {question} />
	<div class="flex flex-row mt-4 w-4/6 justify-between">
		<div in:fly={{ y: 50, duration: 1000, delay: 500 }}>
			<SuitButton suits={['H']} colour="red" />
		</div>
		<div
			in:fly={{
				y: 50,
				duration: 1000,
				delay: 500
			}}
		>
			<SuitButton suits={['D']} colour="red" />
		</div>
		<div
			in:fly={{
				y: 50,
				duration: 1000,
				delay: 500
			}}
		>
			<SuitButton suits={['C']} colour="black" />
		</div>
		<div
			in:fly={{
				y: 50,
				duration: 1000,
				delay: 500
			}}
		>
			<SuitButton suits={['S']} colour="black" />
		</div>
	</div>
</div>
