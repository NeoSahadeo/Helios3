<script lang="ts">
  import "../app.css";
  import { onMount } from "svelte";
  import { is_loggedin, url_resolver } from "$lib/utils";
  import Loading from "$lib/components/loading.svelte";
  import Notification from "$lib/components/notification.svelte";

  let loading = true;
  onMount(async()=>{
    // start loading
    const _loggedin = await is_loggedin();

    // end loading
    loading = false;

    const local_url = url_resolver("local");
    if (_loggedin) {
      if (window.location.href == local_url)
      window.location.href = local_url + "home"
    } else {
      if (window.location.href != local_url)
      window.location.href = local_url
    }
  })
</script>

<Notification />
{#if loading}
<Loading />
{:else}
<slot />

{/if}
