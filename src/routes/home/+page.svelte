<script lang="ts">
	import Password from '$lib/components/password.svelte';
	import { fetch_passwords } from '$lib/utils';
	import { onMount } from 'svelte';
	import './home.css'

	//@ts-ignore
	let passwords: [{
		created: string,
		email: string,
		id: number,
		nickname: string,
		notes: string,
		password: string,
		site_name: string,
		site_url: string,
		username: string,
	}] = []
	onMount(async()=>{
		passwords = await fetch_passwords()
		console.log(passwords)
	})
</script>

<header>
	<div class="logo ml-2">
		<h1>
			Helios 3
		</h1>
		<span>
			Created Neo Sahadeo
		</span>
	</div>
</header>
<main class="mt-8">
{#each passwords as password }
	<Password _password={password}/>
{/each}
</main>
