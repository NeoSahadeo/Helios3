<script lang="ts">
  import "./login.css";
  import { onMount } from "svelte";
  import { url_resolver } from "$lib/utils";
  import { notify } from "$lib/store";
  import LoadingSpinner from "$lib/components/loadingSpinner.svelte";

  let show_spinner = false;
  let submit_button: HTMLButtonElement;
  onMount(() => {
    submit_button.innerHTML = "Log In";
  });
  async function login(event: any) {
    //disable button
    submit_button.classList.add("disabled");
    submit_button.innerHTML = "";
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
          localStorage.setItem("helios3token", json_response.token);
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

    // enable the log in button
    submit_button.classList.remove("disabled");
    submit_button.innerHTML = "Log In";
    show_spinner = false;
  }
</script>

<div class="logo login rounded-md shadow-lg">
  <h1>Helios 3</h1>
  <span> Created Neo Sahadeo </span>
  <form class="mt-12" id="login" on:submit|preventDefault={login}>
    <input type="text" name="username" placeholder="Username" />
    <input type="password" name="password" placeholder="Password" />
    <p>Remember Session?</p>
    <label class="switch">
      <input type="checkbox" name="session" id="session" checked />
      <span class="slider round"></span>
    </label>
    <button type="submit" bind:this={submit_button}>
      {#if show_spinner}
        <LoadingSpinner />
      {/if}
    </button>
  </form>
</div>
