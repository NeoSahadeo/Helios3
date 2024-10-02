<script lang="ts">
  import { notify } from "$lib/store";
  import { url_resolver } from "$lib/utils";
  import { remove_token, get_token } from "$lib/utils";

  async function logout() {
    const token = get_token();
    if (!token) {
      return;
    }
    try {
      const response = await fetch(url_resolver("api") + "logout", {
        method: "post",
        headers: {
          Authorization: `Token ${token}`,
        },
      });
      if (response.ok) {
        notify.send({
          message: "Logged Out",
          type: "success",
        });
        setTimeout(() => {
          remove_token();
          window.location.reload();
        }, 500);
      } else {
        notify.send({
          message: "An internal error occurred",
          type: "error",
        });
      }
    } catch (error) {
      notify.send({
        message: "Error contacting server",
        type: "error",
      });
      console.error(error);
    }
  }
</script>

<form id="logout" on:submit|preventDefault={logout}>
  <button> logout </button>
</form>
