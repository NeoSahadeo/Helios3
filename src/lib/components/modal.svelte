<script lang="ts">
  import { modal } from "$lib/store";

  let is_open = false;
  const get_status = () => {
    modal.status = true;
    is_open = modal.status;
  };
</script>
