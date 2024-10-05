<script lang="ts">
  import Notify from "./notify.svelte";
  import type { MessageType } from "$lib/store";
  import { notify } from "$lib/store";

  //<Notify message="Updated password" id={1} type={"success"} dismissable={true}/>
</script>

<div id="notify-container">
  {#each $notify as message}
    <Notify
      message={message.message}
      id={message.id}
      type={message.type}
      dismissable={message.dismissable}
    />
  {/each}
</div>

<style>
  #notify-container {
    position: fixed;
    bottom: 0px;
    right: 0px;
    margin: 0em 1em 1em 0;
    z-index: 999;
    display: flex;
    flex-direction: column;
    gap: 0.3em;
  }
</style>
