<script lang="ts">
  import Logout from "./logout.svelte";
  import CreateButton from "./createButton.svelte";
  import Search from "./search.svelte";

  let is_open = false,
    mobile_menu: HTMLElement;
  const toggle_menu = () => {
    is_open = !is_open;

    if (is_open) {
      document.body.style.overflow = "hidden";
      mobile_menu.style.display = "flex";
    } else {
      document.body.style.overflow = "";
      mobile_menu.style.display = "none";
    }
  };
</script>

<header class="flex flex-row items-center">
  <div class="logo ml-2">
    <h1>Helios 3</h1>
  </div>
  <div class="ml-auto hidden flex-row gap-1 md:flex">
    <Search />
    <CreateButton />
    <Logout />
  </div>
  <div
    bind:this={mobile_menu}
    class="md:hidden flex-col gap-6 px-3 py-3 pt-12 pr-16 absolute top-0 left-0 w-screen h-screen bg-black text-lg"
    style="display: none;"
  >
    <CreateButton />
    <Logout />
  </div>
  <div class="ml-auto mr-3 flex md:hidden z-10">
    <button on:click={toggle_menu} class="transition-all">
      {#if !is_open}
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
      {:else}
        <svg xmlns="http://www.w3.org/2000/svg" width="3em" viewBox="0 0 24 24">
          <path
            fill="white"
            d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6z"
          />
        </svg>
      {/if}
    </button>
  </div>
</header>
<div class="md:hidden">
  <Search />
</div>
