import { c as create_ssr_component, a as add_attribute } from "../../chunks/ssr.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let submit_button;
  return `<div class="logo login rounded-md shadow-lg"><h1 data-svelte-h="svelte-1hykr1b">Helios 3</h1> <span data-svelte-h="svelte-1ygn2kx">Created Neo Sahadeo</span> <form class="mt-12" id="login"><input type="text" name="username" placeholder="Username"> <input type="password" name="password" placeholder="Password"> <p data-svelte-h="svelte-1uiwtx4">Remember Session?</p> <label class="switch" data-svelte-h="svelte-19avozm"><input type="checkbox" name="session" id="session" checked> <span class="slider round"></span></label> <button type="submit"${add_attribute("this", submit_button, 0)}>${``}</button></form></div>`;
});
export {
  Page as default
};
