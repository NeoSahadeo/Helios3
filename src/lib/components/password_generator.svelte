<script lang="ts">
  import { generate } from "$lib/password_gen";
  import CopyButton from "./copyButton.svelte";
  import "./password_checkbox.svelte";

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

  $effect(() => {
    gen_password();
  });
</script>

<div
  class="bg-neutral-800 rounded max-h-10 min-h-10 mb-4 overflow-scroll text-nowrap items-center flex flex-row pl-2 pt-2"
>
  {password}
</div>
<button class="btn btn-primary" onclick={gen_password}>
  Generate Password
</button>
<CopyButton {copy_anim} text={password} />

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
