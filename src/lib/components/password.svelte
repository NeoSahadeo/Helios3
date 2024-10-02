<script lang="ts">
  import "./password.css";
  import { delete_password, edit_password } from "$lib/utils";
  import type { Password_Object } from "$lib/utils";

  export let _password: Password_Object;

  async function delete_form(event: SubmitEvent) {
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
    const repsonse = await edit_password(formData);
    if (repsonse != undefined) {
      //@ts-ignore
    }
  }
</script>

<details class="password-container" id={_password.id.toString()}>
  <summary>
    <table>
      <tr>
        <td>{_password.nickname}</td>
      </tr>
      <tr>
        <td>{_password.site_name}</td>
      </tr>
    </table>
  </summary>
  <form on:submit|preventDefault={delete_form}>
    <input name="id" value={_password.id.toString()} hidden />
    <input type="submit" value="Delete" />
  </form>
  <form on:submit|preventDefault={edit_form}>
    <input name="id" value={_password.id.toString()} hidden />
    <input type="submit" value="Edit" />
    <input name="username" value={_password.username} placeholder="Username" />
    <input name="password" value={_password.password} placeholder="Password" />
    <input name="email" value={_password.email} placeholder="Email" />
    <input name="nickname" value={_password.nickname} placeholder="Nickname" />
    <textarea name="notes" placeholder="Notes">{_password.notes}</textarea>
    <input
      name="site_name"
      value={_password.site_name}
      placeholder="Site Name"
    />
    <input name="site_url" value={_password.site_url} placeholder="Site URL" />
  </form>
</details>
