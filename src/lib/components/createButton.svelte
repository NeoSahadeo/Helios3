<script lang="ts">
  // Im here because this has to be treated as ts instead of js
</script>

<button
  class="btn btn-soft btn-primary"
  onclick={() => (document.getElementById("create_modal") as any).showModal()}
>
  Create
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1.7em"
    height="1.7em"
    viewBox="0 0 24 24"
  >
    <path fill="#1C4E80" d="M11 13H5v-2h6V5h2v6h6v2h-6v6h-2z" />
  </svg>
</button>
