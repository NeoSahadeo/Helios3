<script lang="ts">
  import type { Password_Object } from "$lib/utils";
  import { create_password, passwords_listener } from "$lib/utils";
  import { generate } from "$lib/password_gen";

  let _password: Password_Object = $state({}) as Password_Object;
  let _dialog: HTMLDialogElement;
  let _form: HTMLFormElement;

  $effect(() => {
    _password.password = generate({});
  });

  // create password
  const save_form = async (event: any) => {
    const formData = new FormData(event.target);
    await create_password(formData);

    _password = {} as Password_Object;
    _dialog.close();
  };
</script>

<dialog bind:this={_dialog} id="create_modal" class="modal">
  <div class="modal-box">
    <form
      bind:this={_form}
      class="flex flex-col"
      onsubmit={(e) => {
        e.preventDefault();
        e.stopImmediatePropagation();
        save_form(e);
      }}
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
        <button
          aria-label="Generate new password"
          onclick={(e) => {
            e.preventDefault();
            e.stopImmediatePropagation();
            _password.password = generate({});
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.7em"
            height="1.7em"
            viewBox="0 0 24 24"
            ><!-- Icon from Material Symbols by Google - https://github.com/google/material-design-icons/blob/master/LICENSE --><path
              fill="white"
              d="M5.3 18.025q-1.075-1.2-1.687-2.75T3 12q0-3.75 2.625-6.375T12 3V1l5 3.75l-5 3.75v-2q-2.275 0-3.887 1.613T6.5 12q0 1.15.438 2.15t1.187 1.75zM12 23l-5-3.75l5-3.75v2q2.275 0 3.888-1.612T17.5 12q0-1.15-.437-2.15T15.875 8.1L18.7 5.975q1.075 1.2 1.688 2.75T21 12q0 3.75-2.625 6.375T12 21z"
            /></svg
          >
        </button>
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
      <button class="btn btn-success mt-10">Create</button>
    </form>
    <div class="modal-action">
      <form method="dialog">
        <button class="btn btn-soft btn-error">Close</button>
      </form>
    </div>
  </div>
</dialog>
