<script lang="ts">
  import { password_state_update, get_password_state } from "$lib/state.svelte";
  import { search, type Password_Object } from "$lib/utils";
  import { notify } from "$lib/store";

  const search_form = async (event: any) => {
    notify.send({
      message: "Searching...",
    });
    const formData = new FormData(event.target);
    const s = await search(formData);
    console.log(s);
    password_state_update(s);
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
