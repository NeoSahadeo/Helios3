<script lang="ts">
  import type { Password_Object } from "$lib/utils";
  import Password from "$lib/components/password.svelte";
  import Header from "$lib/components/header.svelte";
  import { fetch_passwords } from "$lib/utils";
  import { onMount } from "svelte";
  import "./home.css";
  import { passwords_store } from "$lib/store";

  onMount(async () => {
    passwords_store.set(await fetch_passwords());
  });
</script>

<Header />
<main class="mt-1">
  {#each $passwords_store as password}
    <Password _password={password} />
  {/each}
</main>
