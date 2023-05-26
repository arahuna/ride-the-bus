<script lang="ts">
  export let width: string | number | null = "1rem";
  export let height: string | number | null = "1rem";
</script>

<svg
  id="svg-arrow-up-button"
  class="rotate-180 {$$props.class}" 
  {width}
  {height}
  viewBox="0 0 17 17"

><path
id="arrow-up-button"
class="translate-x-[0.58px]"
d="m8.327 15.886 5.447-5.94a.65.65 0 0 0-.002-.849l-3.841-.005V1.068c0-.553-.437-1-.976-1H7.004a.987.987 0 0 0-.976 1v8.02l-3.95-.005a.652.652 0 0 0 .004.848l5.485 5.954a.501.501 0 0 0 .76.001Z"
/>
</svg>
