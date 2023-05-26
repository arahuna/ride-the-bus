<script lang="ts">
    import Equals from "$lib/assets/Equals.svelte";

    export let width = 100;
    export let height = 100;
</script>

<button
    class="hover:fill-red-500 hover:scale-110  transition duration-300 ease-in-out"
>
    <Equals width={width} height={height}  />
</button>
