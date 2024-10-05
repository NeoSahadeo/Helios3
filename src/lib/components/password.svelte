<script lang="ts">
  import "./password.css";
  import { delete_password, edit_password } from "$lib/utils";
  import type { Password_Object } from "$lib/utils";

  export let _password: Password_Object;
  let has_changed = false,
    hidden = true;

  let origin_password = stringify_password();
  const check_diff = () => {
    has_changed = JSON.stringify(origin_password) !== JSON.stringify(_password);
  };

  const toggle_visibility = () => {
    hidden = !hidden;
  };

  async function delete_form(event: SubmitEvent) {
    if (
      !confirm(`Ar you sure you want to delete this password?
      Nickname: ${_password.nickname}
      Site name: ${_password.site_name}`)
    ) {
      return;
    }
    //@ts-ignore
    const formData = new FormData(event.target);
    const repsonse = await delete_password(formData);
    if (repsonse != undefined) {
      //@ts-ignore
      document.getElementById(formData.get("id")).remove();
    }
  }

  async function edit_form(event: SubmitEvent) {
    //@ts-ignore
    const formData = new FormData(event.target);
    await edit_password(formData);

    // recalc password
    origin_password = stringify_password();
    check_diff();
  }

  function stringify_password(): Password_Object {
    return JSON.parse(JSON.stringify(_password));
  }
</script>

<details class="password-container" id={_password.id.toString()}>
  <summary>
    <table>
      <tr class="flex flex-row gap-2">
        <td>{_password.nickname}</td>
        {#if _password.site_name}
          <td
            >(<a target="_blank" href={_password.site_url} class="text-blue-400"
              >{_password.site_name}</a
            >)</td
          >
        {/if}
      </tr>
    </table>
  </summary>
  <h1 class="text-lg font-bold underline">Contents</h1>
  <form on:submit|preventDefault={edit_form} on:input={check_diff}>
    <input name="id" value={_password.id.toString()} hidden />
    <input
      name="username"
      bind:value={_password.username}
      placeholder="Username"
    />
    <div class="flex">
      {#if hidden}
        <input
          name="password"
          bind:value={_password.password}
          placeholder="Password"
          type="password"
        />
      {:else}
        <input
          name="password"
          bind:value={_password.password}
          placeholder="Password"
        />
      {/if}
      <button on:click|preventDefault={toggle_visibility}>
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
    <div class="flex flex-row ml-auto gap-3">
      {#if has_changed}
        <input type="submit" value="Update" />
      {/if}

      <form on:submit|preventDefault={delete_form}>
        <input name="id" value={_password.id.toString()} hidden />
        <input type="submit" value="Delete" />
      </form>
    </div>
  </form>
</details>
