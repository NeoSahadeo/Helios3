import { c as create_ssr_component } from "../../chunks/ssr.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<button data-svelte-h="svelte-1jc0a81">Message</button> <div class="logo login rounded-md shadow-lg"><h1 data-svelte-h="svelte-v46f9k">Helios 3</h1> <span data-svelte-h="svelte-1li5tu8">Created Neo Sahadeo</span> <form class="mt-12" id="login" data-svelte-h="svelte-i87w0r"><input type="text" name="username" placeholder="Username"> <input type="password" name="password" placeholder="Password"> <p>Remember Session?</p> <label class="switch"><input type="checkbox" name="session" id="session" checked> <span class="slider round"></span></label> <input type="submit" value="Log In"></form></div>`;
});
export {
  Page as default
};
