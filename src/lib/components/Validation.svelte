<script lang="ts">
	import { fade } from 'svelte/transition';

	export let success: boolean;
	export let nextQuestion: number;
</script>

<div class="flex text-white flex-col items-center w-full h-full">
	<div class="flex justify-center flex-col items-center mb-3">
		<h1 class="font-semibold text-2xl font-noto-sans">
			{success ? 'Correct!' : 'Incorrect!'}
		</h1>
		<div class="text-xl">
			Your score is {success ? 1 : 0}
		</div>
	</div>
	<div class="flex flex-row">
		<a
			href="/"
			data-sveltekit-reload
			class="bg-red-500 rounded-lg p-2 text-lg font-semibold mr-2 hover:scale-110 transition duration-200 ease-out"
		>
			Restart Game</a
		>
		<a
			href={`/game/${nextQuestion}`}
			data-sveltekit-replacestate
			class="bg-green-900 rounded-lg p-2 hover:scale-110 transition duration-200 ease-out text-lg font-semibold ml-2"
			>Next Question</a
		>
	</div>
</div>
