<script lang="ts">
	import './login.css'
	import { url_resolver } from '$lib/utils';
	import { notify } from '$lib/notfiy';

	async function login(event: any) {
		const formData = new FormData(event.target)
		const response = await fetch(url_resolver("api") + 'login', {
			method: 'post',
			body: formData
		})
		if (response.ok) {
			const json_response = await response.json()
			console.log(json_response)
			if (json_response.token) {
				localStorage.setItem("helios3token", json_response.token)
				window.location.href = 'home'
			}
		}
	}
</script>
<button on:click={gen_message}>
Message
</button>
<div class="logo login rounded-md shadow-lg">
	<h1>
		Helios 3
	</h1>
	<span>
		Created Neo Sahadeo
	</span>
	<form class="mt-12" id="login" on:submit|preventDefault={login}>
		<input type="text" name="username" placeholder="Username">
		<input  type="password" name="password" placeholder="Password">
		<p>Remember Session?</p>
		<label class="switch">
			<input type="checkbox" name="session" id="session" checked>
			<span class="slider round"></span>
		</label>
		<input type="submit" value="Log In">
	</form>
</div>
