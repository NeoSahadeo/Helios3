<script lang="ts">
  import Header from "$lib/components/header.svelte";
  import ExportButton from "$lib/components/exportButton.svelte";
  import ImportButton from "$lib/components/importButton.svelte";
</script>

<Header></Header>
<div class="px-3 py-3">
  <h1 class="text-3xl mb-4">Dashboard</h1>
  <ExportButton />
  <ImportButton />
</div>
