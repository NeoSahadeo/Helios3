<script lang="ts">
	import "../notfiy"
	import Notify from "./notify.svelte";
</script>

<style>
	#notify-container {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		background-color: red;
	}
</style>

<div id="notify-container">
<Notify />
</div>
