<script lang="ts">
  import LoadingSpinner from "./loadingSpinner.svelte";
</script>

<div id="loading" class="m-auto flex item-center justify-center flex-col">
  <h1 class="text-2xl">Helios3 is loading</h1>
  <div class="mx-auto mt-6">
    <LoadingSpinner />
  </div>
</div>

<style>
  #loading {
    width: fit-content;
  }
</style>
