<script lang="ts">
  import type { Password_Object } from "$lib/utils";
  import { create_password } from "$lib/utils";
  import { modal } from "$lib/store";
  import { fetch_passwords } from "$lib/utils";
  import { passwords_store } from "$lib/store";

  //@ts-ignore
  let _password: Password_Object = {},
    _dialog: HTMLDialogElement;

  // Close modal
  const close_modal = () => {
    confirm("Are you sure you want to close this form?")
      ? modal.close()
      : modal.open();
  };

  // Update modal
  modal.subscribe((value: any) => {
    if (_dialog) {
      value ? _dialog.classList.add("flex") : _dialog.classList.remove("flex");
    }
  });

  // create password
  const save_form = async (event: any) => {
    const formData = new FormData(event.target);
    await create_password(formData);
    passwords_store.set(await fetch_passwords());
    modal.close();
  };
</script>

<dialog class="items-center justify-center flex-col" bind:this={_dialog}>
  <div
    class="flex flex-col bg-gray-900 px-4 py-2 pb-5 sm:rounded w-full sm:max-w-lg sm:h-auto h-full"
  >
    <form class="flex flex-col" on:submit|preventDefault={save_form}>
      <h1 class="text-lg underline font-bold">Create a password</h1>
      <input
        name="username"
        bind:value={_password.username}
        placeholder="Username"
      />
      <div class="flex">
        <input
          name="password"
          bind:value={_password.password}
          placeholder="Password"
        />
      </div>
      <input name="email" bind:value={_password.email} placeholder="Email" />
      <input
        name="nickname"
        bind:value={_password.nickname}
        placeholder="Nickname"
      />
      <textarea name="notes" placeholder="Notes" bind:value={_password.notes}
      ></textarea>
      <input
        name="site_name"
        bind:value={_password.site_name}
        placeholder="Site Name"
      />
      <input
        name="site_url"
        bind:value={_password.site_url}
        placeholder="Site URL"
      />
      <button class="bg-blue-600 max-w-32 rounded mt-4">Create</button>
    </form>
    <button
      class="bg-gray-600 max-w-32 rounded px-3 mt-4"
      on:click={close_modal}>Close</button
    >
  </div>
</dialog>

<style>
  dialog {
    background-color: black;
    z-index: 20;
    width: 100%;
    height: 100%;
  }
  dialog::backdrop {
    background-color: red;
  }
</style>
