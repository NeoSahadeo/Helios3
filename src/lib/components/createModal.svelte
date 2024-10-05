<script lang="ts">
  import type { Password_Object } from "$lib/utils";
  import { create_password } from "$lib/utils";
  import { modal } from "$lib/store";
  import { fetch_passwords } from "$lib/utils";
  import { passwords_store } from "$lib/store";

  //@ts-ignore
  let _password: Password_Object = {},
    _dialog: HTMLDialogElement,
    _form: HTMLFormElement,
    _generated_password: string;

  // Close modal
  const close_modal = () => {
    if (confirm("Are you sure you want to close this form?")) {
      modal.close();
      //@ts-ignore
      _password = {};
    }
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
    const response = await create_password(formData);
    passwords_store.set(await fetch_passwords());

    //@ts-ignore
    _password = {};
    modal.close();
  };
</script>

<dialog class="items-center justify-center flex-col" bind:this={_dialog}>
  <div
    style="background-color: #070707;"
    class="flex flex-col px-4 py-2 pb-5 sm:rounded w-full sm:max-w-lg sm:h-auto h-full"
  >
    <form
      bind:this={_form}
      class="flex flex-col"
      on:submit|preventDefault={save_form}
    >
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
      <button
        class="bg-blue-600 max-w-32 rounded mt-4 py-3 md:py-2 hover:bg-blue-900"
        >Create</button
      >
    </form>
    <button
      class="bg-red-600 max-w-32 rounded px-3 py-3 md:py-2 mt-4 hover:bg-red-900"
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
    position: fixed;
  }
  form input,
  form textarea {
    outline: 0px solid gray;
    width: 100%;
    padding: 0.2em 0.5em;
    border-radius: 0.135em;
    background-color: black;
  }
  form input:hover,
  form textarea:hover,
  form input:focus,
  form textarea:focus {
    outline: 1px solid gray;
  }
</style>
