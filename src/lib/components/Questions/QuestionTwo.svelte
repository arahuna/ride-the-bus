<script lang="ts">
	import { fly } from 'svelte/transition';
	import QuestionTitle from '../QuestionTitle.svelte';
	import ArrowDownButton from '../buttons/ArrowDownButton.svelte';
	import ArrowUpButton from '../buttons/ArrowUpButton.svelte';
	import EqualsButton from '../buttons/EqualsButton.svelte';

	export let startDelay = 0;
</script>

<div class="flex justify-center w-full flex-col items-center">
	<QuestionTitle
		question={{
			number: 2,
			text: 'Is the second card higher or lower then the first?'
		}}
	/>
	<div class="flex flex-row mt-4 w-1/2 justify-between">
		<div
			in:fly={{
				y: 50,
				duration: 1500,
				delay: 500 + startDelay
			}}
		>
			<ArrowDownButton />
		</div>
		<div
			in:fly={{
				y: 50,
				duration: 1500,
				delay: 500 + startDelay
			}}
		>
			<EqualsButton />
		</div>
		<div
			in:fly={{
				y: 50,
				duration: 1500,
				delay: 500 + startDelay
			}}
		>
			<ArrowUpButton />
		</div>
	</div>
</div>
