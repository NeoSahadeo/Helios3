<script lang="ts">
  import { generate } from "$lib/password_gen";
  import { expoIn, expoInOut, expoOut } from "svelte/easing";
  import "./password_checkbox.svelte";
  import { fade } from "svelte/transition";

  let length = $state(20);
  let numbers = $state(true);
  let symbols = $state(true);
  let upper_case = $state(true);
  let lower_case = $state(true);

  let password = $state();
  let copy_anim = $state(false);

  function gen_password() {
    password = generate({
      length,
      numbers,
      symbols,
      upper_case,
      lower_case,
    });
  }

  function copy() {
    copy_anim = true;
    navigator.clipboard.writeText(password as string);
    setTimeout(() => {
      copy_anim = false;
    }, 1000);
  }

  $effect(() => {
    gen_password();
  });
</script>

<div class="py-3 bg-neutral-800 rounded px-4 mb-4">{password}</div>
<button class="btn btn-primary" onclick={gen_password}>
  Generate Password
</button>
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

<div class="flex flex-row gap-2 w-fit items-center mt-3 mb-3">
  <span>Length</span>

  <input class="input input-primary" type="number" bind:value={length} />
</div>

<password-checkbox
  ongennewpassword={() => {
    symbols = !symbols;
    gen_password();
  }}
  name="Symbols"
  checked={symbols}
></password-checkbox>

<password-checkbox
  ongennewpassword={() => {
    numbers = !numbers;
    gen_password();
  }}
  name="Numbers"
  checked={numbers}
></password-checkbox>

<password-checkbox
  ongennewpassword={() => {
    upper_case = !upper_case;
    gen_password();
  }}
  name="Uppercase"
  checked={upper_case}
></password-checkbox>

<password-checkbox
  ongennewpassword={() => {
    lower_case = !lower_case;
    gen_password();
  }}
  name="Lowercase"
  checked={lower_case}
></password-checkbox>
