<script lang="ts">
  import { passwords_store } from "$lib/store";
  import { search } from "$lib/utils";
  import { notify } from "$lib/store";

  const search_form = async (event: any) => {
    notify.send({
      message: "Searching...",
    });
    const formData = new FormData(event.target);
    //@ts-ignore
    passwords_store.set(await search(formData));
  };
</script>

<form class="md:mr-3" method="get" on:submit|preventDefault={search_form}>
  <input
    name="q"
    type="text"
    placeholder="Search"
    class="md:rounded pl-3 py-2 my-auto"
  />
</form>

<style>
  input {
    border: 0px;
    outline: 1px solid grey;
    transition: 0.3s all;
  }
  input:hover,
  input:focus {
    border: 0px;
    outline: 1px solid gold;
  }
</style>
