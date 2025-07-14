<script lang="ts">
  import { expoIn, expoInOut, expoOut } from "svelte/easing";
  import { fade } from "svelte/transition";
  let { copy_anim, text } = $props();

  function copy() {
    copy_anim = true;
    navigator.clipboard.writeText(text);
    setTimeout(() => {
      copy_anim = false;
    }, 1000);
  }
</script>

<button class="btn btn-accent w-24" onclick={copy}>
  {#if !copy_anim}
    Copy
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 24 24"
      ><!-- Icon from Material Symbols by Google - https://github.com/google/material-design-icons/blob/master/LICENSE --><path
        fill="currentColor"
        d="M9 18q-.825 0-1.412-.587T7 16V4q0-.825.588-1.412T9 2h9q.825 0 1.413.588T20 4v12q0 .825-.587 1.413T18 18zm-4 4q-.825 0-1.412-.587T3 20V6h2v14h11v2z"
      /></svg
    >
  {:else}
    <svg
      in:fade={{ easing: expoInOut, duration: 100 }}
      out:fade={{ duration: 0 }}
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 14 14"
      ><!-- Icon from Streamline by Streamline - https://creativecommons.org/licenses/by/4.0/ --><g
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        ><path
          d="M9.5 1.5H11a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-10a1 1 0 0 1 1-1h1.5"
        /><rect width="5" height="2.5" x="4.5" y=".5" rx="1" /><path
          d="m4.5 8.5l2 1.5L9 6"
        /></g
      ></svg
    >
  {/if}
</button>
