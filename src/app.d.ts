// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
  namespace App {
    interface Password {
      created: string;
      email: string;
      id: number;
      nickname: string;
      notes: string;
      password: string;
      site_name: string;
      site_url: string;
      username: string;
    }
    // interface Error {}
    // interface Locals {}
    // interface PageData {}
    // interface PageState {}
    // interface Platform {}
  }
}

export { Password };
