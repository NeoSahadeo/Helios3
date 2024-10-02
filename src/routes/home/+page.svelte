<script lang="ts">
  import type { Password_Object } from "$lib/utils";
  import Password from "$lib/components/password.svelte";
  import Header from "$lib/components/header.svelte";
  import { fetch_passwords } from "$lib/utils";
  import { onMount } from "svelte";
  import "./home.css";

  let passwords: Password_Object[] = [];
  onMount(async () => {
    passwords = await fetch_passwords();
    console.log(passwords);
  });
</script>

<Header />
<main class="mt-1">
  {#each passwords as password}
    <Password _password={password} />
  {/each}
</main>
