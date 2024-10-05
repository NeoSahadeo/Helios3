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
  <button
    class="flex flex-row gap-1 items-center px-2 py-2 mr-2 rounded hover:bg-red-700 transition-all justify-center"
  >
    Log Out

    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.7em"
      height="1.7em"
      viewBox="0 0 24 24"
    >
      <path
        fill="white"
        d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h7v2H5v14h7v2zm11-4l-1.375-1.45l2.55-2.55H9v-2h8.175l-2.55-2.55L16 7l5 5z"
      />
    </svg>
  </button>
</form>
