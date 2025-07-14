import type { Password_Object } from "./utils";

let password_state = $state<Password_Object[]>([]);

export const get_password_state = () => password_state;

export const password_state_update = (passwords: Password_Object[]) => {
	password_state = passwords;
};
