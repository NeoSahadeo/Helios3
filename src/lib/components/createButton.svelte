<script lang="ts">
  import { modal } from "$lib/store";
  function create() {
    modal.open();
  }
</script>

<form id="logout" on:submit|preventDefault={create}>
  <button
    class="flex flex-row gap-1 items-center px-2 py-2 mr-2 rounded hover:bg-blue-600 transition-all justify-center"
  >
    Create
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.7em"
      height="1.7em"
      viewBox="0 0 24 24"
    >
      <path fill="white" d="M11 13H5v-2h6V5h2v6h6v2h-6v6h-2z" />
    </svg>
  </button>
</form>
