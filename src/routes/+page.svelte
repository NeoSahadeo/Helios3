<script lang="ts">
	import './login.css'
	export const ssr = false;

	async function login(event: any) {
		const formData = new FormData(event.target)
		const response = await fetch('https://neosahadeo.pythonanywhere.com/login', {
			method: 'post',
			body: formData
		})
		console.log(response)
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
