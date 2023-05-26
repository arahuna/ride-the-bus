<script>
	import ArrowUpButton from '$lib/components/buttons/ArrowUpButton.svelte';
	import ArrowDownButton from '$lib/components/buttons/ArrowDownButton.svelte';
	import SuitButton from '$lib/components/buttons/SuitButton.svelte';
	import CardList from '$lib/components/cards/CardList.svelte';
	import EqualsButton from '$lib/components/buttons/EqualsButton.svelte';
</script>

<div class="flex flex-col items-center justify-center">
	<CardList />
	<ArrowUpButton/>
	<EqualsButton/>
	<ArrowDownButton/>
	<SuitButton />
</div>
