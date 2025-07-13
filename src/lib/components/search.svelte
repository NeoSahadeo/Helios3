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

<form
  method="get"
  onsubmit={(e) => {
    e.preventDefault();
    e.stopImmediatePropagation();
    search_form(e);
  }}
>
  <input
    name="q"
    type="text"
    placeholder="Search Passwords"
    class="input input-primary w-max"
  />
</form>
