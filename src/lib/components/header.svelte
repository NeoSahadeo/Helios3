<script lang="ts">
  import Search from "./search.svelte";
  import CreateButton from "./createButton.svelte";
  import Logout from "./logout.svelte";
  import { url_resolver } from "$lib/utils";
  import { onMount } from "svelte";

  let spacer = $state<HTMLElement>();
  onMount(async () => {
    window.addEventListener("resize", calc_header);
    calc_header();
  });

  function calc_header() {
    const header = document.getElementsByTagName("header")[0];
    if (header && spacer) {
      const header_size = header.getBoundingClientRect();
      spacer.style.height = header_size.height + "px";
    }
  }
</script>

<header
  class="flex flex-row items-center fixed w-full shadow bg-neutral-900 py-2 z-50"
>
  <div class="drawer w-16">
    <input id="menu" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content">
      <label for="menu" class="drawer-button btn btn-ghost">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          ><!-- Icon from Google Material Icons by Material Design Authors - https://github.com/material-icons/material-icons/blob/master/LICENSE --><path
            fill="currentColor"
            d="M3 18h18v-2H3zm0-5h18v-2H3zm0-7v2h18V6z"
          /></svg
        >
      </label>
    </div>
    <div class="drawer-side">
      <label for="menu" aria-label="close sidebar" class="drawer-overlay"
      ></label>
      <ul
        class="menu bg-base-200 text-base-content min-h-full w-72 p-4 top-0 left-0"
      >
        <li class="-ml-5">
          <input id="menu" type="checkbox" class="drawer-toggle" />
          <div class="drawer-content remove-style">
            <label for="menu" class="drawer-button btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                ><!-- Icon from Google Material Icons by Material Design Authors - https://github.com/material-icons/material-icons/blob/master/LICENSE --><path
                  fill="currentColor"
                  d="M3 18h18v-2H3zm0-5h18v-2H3zm0-7v2h18V6z"
                /></svg
              >
            </label>
          </div>
        </li>
        <li><a href={url_resolver("local") + "home"}>Home</a></li>
        <li>
          <a href={url_resolver("local") + "password_generator"}
            >Password Generator</a
          >
        </li>
        <div class="mt-5">
          <CreateButton />
        </div>
        <div class="mt-auto">
          <Logout />
        </div>
      </ul>
    </div>
  </div>
  <Search />
</header>
<div bind:this={spacer}></div>

<style>
  .remove-style {
    background: none !important;
    background-color: none !important;
  }
</style>
