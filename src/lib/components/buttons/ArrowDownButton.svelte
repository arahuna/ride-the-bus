<script lang="ts">
	import ArrowDown from "$lib/assets/ArrowDown.svelte";

    export let width = 100;
    export let height = 100;
</script>

<button
	class="hover:fill-red-500 hover:scale-105 hover:translate-y-5 transition duration-300 ease-in-out"
>	
	<ArrowDown width={width} height={height} />
</button>

<style scoped>


</style>
