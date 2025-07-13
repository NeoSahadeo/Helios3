<svelte:options customElement="password-checkbox" />

<script lang="ts">
  let { name, checked } = $props();

  function dispatch() {
    $host().dispatchEvent(new CustomEvent("gennewpassword"));
  }
</script>

<div
  class="flex flex-row gap-2"
  style="display: flex; min-width: 3em !important;"
>
  <div class="block min-w-10">{name}</div>
  <input
    type="checkbox"
    onchange={() => dispatch()}
    bind:checked
    class="checkbox checkbox-primary"
  />
</div>
