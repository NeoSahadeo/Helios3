<script lang="ts">
	import './password.css'
	import { delete_password } from '$lib/utils'
	export let _password: {
		created: string,
		email: string,
		id: number,
		nickname: string,
		notes: string,
		password: string,
		site_name: string,
		site_url: string,
		username: string,
	}

	async function delete_form(event: any) {
		const formData = new FormData(event.target)
		const repsonse = await delete_password(formData)
		if (repsonse){
			//@ts-ignore
			document.getElementById(formData.get('id')).remove()
		}
	}
</script>
<details class="password-container" id="{_password.id.toString()}">
	<summary>
		<table>
			<tr>
				<td>{_password.nickname}</td>
			</tr>
			<tr>
				<td>{_password.site_name}</td>
			</tr>
		</table>
	</summary>
	<table>
		<tr>
			<td>{_password.created}</td>
		</tr>
		<tr>
			<td>{_password.email}</td>
		</tr>
		<tr>
			<td>{_password.nickname}</td>
		</tr>
		<tr>
			<td>{_password.password}</td>
		</tr>
		<tr>
			<td>{_password.site_name}</td>
		</tr>
		<tr>
			<td>{_password.site_url}</td>
		</tr>
		<tr>
			<td>{_password.notes}</td>
		</tr>
	</table>
	<form on:submit|preventDefault={delete_form}>
		<input name="id" value="{_password.id.toString()}" hidden>
		<input type="submit" value="Delete">
	</form>
</details>
