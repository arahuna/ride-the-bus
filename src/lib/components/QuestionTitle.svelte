<script lang="ts">
	import { fly } from 'svelte/transition';
	export let transitionDelay = 0;
	export let question: {
		number: number;
		text: string;
	};
</script>

<div
	class="flex flex-col text-center w-full items-center font-semibold text-white text-2xl font-noto-sans"
	in:fly={{
		y: 100,
		duration: 1500,
		delay: transitionDelay
	}}
>
	<h1 class="mb-1">{'Question ' + question.number}</h1>
	<h1>
		{question.text}
	</h1>
</div>
