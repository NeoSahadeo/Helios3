<script lang="ts">
  import Logout from "./logout.svelte";
  import CreateButton from "./createButton.svelte";

  const toggle_menu = () => {};
</script>

<header class="flex flex-row items-center">
  <div class="logo ml-2">
    <h1>Helios 3</h1>
  </div>
  <div class="ml-auto hidden flex-row gap-1 md:flex">
    <CreateButton />
    <Logout />
  </div>
  <div class="ml-auto mr-3 flex md:hidden">
    <button on:click={toggle_menu}>
      <svg xmlns="http://www.w3.org/2000/svg" width="3em" viewBox="0 0 48 48">
        <path
          fill="none"
          stroke="white"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="4"
          d="M7.95 11.95h32m-32 12h32m-32 12h32"
        />
      </svg>
    </button>
  </div>
</header>
