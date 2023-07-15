<script lang="ts">
	import { fly } from 'svelte/transition';
	import QuestionTitle from '$lib/components/QuestionTitle.svelte';
	import ArrowDownButton from '$lib/components/buttons/ArrowDownButton.svelte';
	import EqualsButton from '$lib/components/buttons/EqualsButton.svelte';
	import ArrowUpButton from '$lib/components/buttons/ArrowUpButton.svelte';
</script>

<div
	class="flex justify-center w-full flex-col items-center
"
>
	<QuestionTitle
		question={{ number: 2, text: 'Is the second card higher, lower or equal to the first?' }}
	/>
	<div class="flex flex-row mt-4 w-1/2 justify-between">
		<div
			in:fly={{
				y: 50,
				duration: 1000,
				delay: 500
			}}
		>
			<ArrowDownButton />
		</div>
		<div
			in:fly={{
				y: 50,
				duration: 1000,
				delay: 500
			}}
		>
			<EqualsButton />
		</div>
		<div
			in:fly={{
				y: 50,
				duration: 1000,
				delay: 500
			}}
		>
			<ArrowUpButton />
		</div>
	</div>
</div>
