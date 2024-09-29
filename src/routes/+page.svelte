<script lang="ts">
	import { onMount } from 'svelte';
	import './login.css'
	import { fetch_passwords } from '$lib/utils'
	import { logged_in, page_contents } from '$lib/store'

	onMount(async()=>{
		const token = localStorage.getItem("helios3token")
		if (token) {
			const response = await fetch_passwords(token)

			// Log user out if the token is bugged
			if (!response){
				localStorage.removeItem('helios3token')
				return undefined
			}

			logged_in.set(true)
			window.location.href = 'home'
		}
	})

	async function login(event: any) {
		const formData = new FormData(event.target)
		const response = await fetch('https://neosahadeo.pythonanywhere.com/login', {
			method: 'post',
			body: formData
		})
		if (response.ok) {
			const json_response = await response.json()
			console.log(json_response.token)
			if (json_response.token) {
				localStorage.setItem("helios3token", json_response.token)
				window.location.href = 'home'
			}
		}
	}

</script>
<div class="logo rounded-md shadow-lg">
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
