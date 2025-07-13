<script lang="ts">
  import "./login.css";
  import { url_resolver } from "$lib/utils";
  import { notify } from "$lib/store";
  import logo from "$lib/assets/logo.webp";
  import LoadingSpinner from "$lib/components/loadingSpinner.svelte";

  const default_button_state = "Login";

  let show_spinner = $state(false);
  let submit_button_text = $state(default_button_state);
  let submit_button = $state<HTMLButtonElement>();

  async function login(event: any) {
    if (!submit_button) return;

    submit_button.classList.add("disabled");
    submit_button_text = "";
    show_spinner = true;

    const formData = new FormData(event.target);

    try {
      const response = await fetch(url_resolver("api") + "login", {
        method: "post",
        body: formData,
      });
      if (response.ok) {
        const json_response = await response.json();
        if (json_response.error) {
          notify.send({
            message: json_response.error,
            type: "error",
          });
        }
        if (json_response.token) {
          notify.send({
            message: "Login Successful",
            type: "success",
          });

          // check if session should be saved
          if (formData.get("session") === "on") {
            localStorage.setItem("helios3token", json_response.token);
          } else {
            sessionStorage.setItem("helios3token", json_response.token);
          }

          setTimeout(() => {
            window.location.href = "home";
          }, 500);
        }
      }
    } catch (error) {
      notify.send({
        message: "Error contacting server",
        type: "error",
      });
      console.error(error);
    }

    submit_button.classList.remove("disabled");
    submit_button_text = default_button_state;
    show_spinner = false;
  }
</script>

<div
  class="flex flex-col items-center justify-center w-screen"
  style="height: 100dvh;"
>
  <img src={logo} alt="Helios 3" class="w-auto h-16" />
  <form
    class="max-w-96 items-center flex flex-col pt-5 gap-2 mx-auto"
    id="login"
    onsubmit={(e) => {
      e.preventDefault();
      e.stopImmediatePropagation();
      login(e);
    }}
  >
    <input type="text" name="username" placeholder="Username" class="input" />
    <input
      type="password"
      name="password"
      placeholder="Password"
      class="input"
    />
    <div class="flex flex-row justify-between w-full">
      <p>Remember Session?</p>
      <input
        type="checkbox"
        name="session"
        id="session"
        class="toggle toggle-primary"
        checked
      />
    </div>
    <div class="flex flex-col items-start w-full">
      <button type="submit" class="btn btn-primary" bind:this={submit_button}>
        {#if show_spinner}
          <LoadingSpinner />
        {:else}
          {submit_button_text}
        {/if}
      </button>

      <p
        class="text-sm whitespace-nowrap flex flex-row items-center gap-1 mt-3"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          ><!-- Icon from Material Symbols by Google - https://github.com/google/material-design-icons/blob/master/LICENSE --><path
            fill="currentColor"
            d="M6 22q-.825 0-1.412-.587T4 20V10q0-.825.588-1.412T6 8h1V6q0-2.075 1.463-3.537T12 1t3.538 1.463T17 6v2h1q.825 0 1.413.588T20 10v10q0 .825-.587 1.413T18 22zm6-5q.825 0 1.413-.587T14 15t-.587-1.412T12 13t-1.412.588T10 15t.588 1.413T12 17M9 8h6V6q0-1.25-.875-2.125T12 3t-2.125.875T9 6z"
          /></svg
        >
        Secured with
        <a
          class="link link-accent"
          href="https://jazzband.github.io/django-rest-knox/"
          target="_blank">Django-Rest-Knox</a
        >
      </p>
    </div>
  </form>
</div>
