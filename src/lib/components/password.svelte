<script lang="ts">
  import "./password.css";
  import { delete_password, edit_password } from "$lib/utils";
  import type { Password_Object } from "$lib/utils";
  import { generate } from "$lib/password_gen";

  let { password_obj }: { password_obj: Password_Object } = $props();

  let email = $state<string>(password_obj.email);
  let id = $state<number>(password_obj.id);
  let nickname = $state<string>(password_obj.nickname);
  let notes = $state<string>(password_obj.notes);
  let password = $state<string>(password_obj.password);
  let site_name = $state<string>(password_obj.site_name);
  let site_url = $state<string>(password_obj.site_url);
  let username = $state<string>(password_obj.username);

  let has_changed = $state(false);
  let hidden = $state(true);
  let _form = $state<HTMLFormElement>();

  let origin_password_obj = stringify_password_obj();
  const check_diff = () => {
    has_changed =
      JSON.stringify(origin_password_obj) !==
      JSON.stringify(stringify_password_obj());
  };

  const toggle_visibility = () => {
    hidden = !hidden;
  };

  async function delete_form() {
    if (!_form) return;

    if (
      !confirm(`Ar you sure you want to delete this password?
      Nickname: ${nickname}
      Site name: ${site_name}`)
    ) {
      return;
    }

    const formData = new FormData(_form);
    const repsonse = await delete_password(formData);

    if (repsonse != undefined && id) {
      document.getElementById(id.toString())!.remove();
    }
  }

  async function edit_form(event: SubmitEvent) {
    const formData = new FormData(event.target as HTMLFormElement);
    await edit_password(formData);

    // recalc password object
    origin_password_obj = stringify_password_obj();
    check_diff();
  }

  function stringify_password_obj(): Password_Object | undefined {
    return JSON.parse(
      JSON.stringify({
        email,
        id,
        nickname,
        notes,
        password,
        site_name,
        site_url,
        username,
      }),
    );
  }
</script>

<details class="password-container" id={id?.toString()}>
  <summary>
    <table>
      <tbody>
        <tr class="flex flex-row gap-2">
          <td>{nickname}</td>
          {#if site_name}
            <td
              >(<a target="_blank" href={site_url} class="text-blue-400"
                >{site_name}</a
              >)</td
            >
          {/if}
        </tr>
      </tbody>
    </table>
  </summary>
  <h1 class="text-lg font-bold underline">Contents</h1>
  <form
    bind:this={_form}
    onsubmit={(e) => {
      e.preventDefault();
      e.stopImmediatePropagation();
      edit_form(e);
    }}
    oninput={check_diff}
  >
    <input name="id" value={id?.toString()} hidden />
    <input name="username" bind:value={username} placeholder="Username" />
    <div class="flex">
      {#if hidden}
        <input
          name="password"
          bind:value={password}
          placeholder="Password"
          type="password"
        />
      {:else}
        <input name="password" bind:value={password} placeholder="Password" />
      {/if}
      <button
        aria-label="Toggle Password"
        onclick={(e) => {
          e.preventDefault();
          e.stopImmediatePropagation();
          toggle_visibility();
        }}
      >
        {#if hidden}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.7em"
            height="1.7em"
            viewBox="0 0 24 24"
          >
            <path
              fill="white"
              d="M14.33 7.17A16 16 0 0 0 12 7c-4.97 0-9 2.239-9 5c0 1.44 1.096 2.738 2.85 3.65l2.362-2.362a4 4 0 0 1 5.076-5.076zm-3.1 8.756q.375.074.77.074a4 4 0 0 0 3.926-4.77l2.647-2.646C20.078 9.478 21 10.68 21 12c0 2.761-4.03 5-9 5q-.899 0-1.749-.094zm6.563-10.719a1 1 0 1 1 1.414 1.414L6.48 19.35a1 1 0 1 1-1.414-1.414z"
            />
          </svg>
        {:else}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.7em"
            height="1.7em"
            viewBox="0 0 24 24"
          >
            <path fill="white" d="M12 14a2 2 0 1 0 0-4a2 2 0 0 0 0 4" />
            <path
              fill="white"
              fill-rule="evenodd"
              d="M21 12c0 2.761-4.03 5-9 5s-9-2.239-9-5s4.03-5 9-5s9 2.239 9 5m-5 0a4 4 0 1 1-8 0a4 4 0 0 1 8 0"
              clip-rule="evenodd"
            />
          </svg>
        {/if}
      </button>
      <button
        aria-label="Generate new password"
        onclick={(e) => {
          e.preventDefault();
          e.stopImmediatePropagation();
          hidden = false;
          password = generate({});
          check_diff();
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
    <input name="email" bind:value={email} placeholder="Email" />
    <input name="nickname" bind:value={nickname} placeholder="Nickname" />
    <textarea name="notes" placeholder="Notes" bind:value={notes}></textarea>
    <input name="site_name" bind:value={site_name} placeholder="Site Name" />
    <input name="site_url" bind:value={site_url} placeholder="Site URL" />
    <div class="flex flex-col sm:flex-row mt-4 sm:mt-0 gap-3">
      {#if has_changed}
        <input type="submit" value="Update" class="btn btn-primary" />
      {/if}
      <div class="">
        <button
          class="btn btn-error w-full"
          onclick={(e) => {
            e.preventDefault();
            e.stopImmediatePropagation();
            delete_form();
          }}
        >
          Delete
        </button>
      </div>
    </div>
  </form>
</details>
