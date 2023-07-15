<script>
	import { onMount } from 'svelte';
	import '../global.css';

	let ready = false;
	onMount(() => {
		ready = true;
	});
</script>

<body class="flex justify-center items-center bg-green-700 h-[100vh]">
	{#if ready}
		<slot />
	{/if}
</body>
