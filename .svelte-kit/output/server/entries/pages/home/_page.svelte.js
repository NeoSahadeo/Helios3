import {
  c as create_ssr_component,
  d as add_attribute,
  e as escape,
  f as each,
  v as validate_component,
} from "../../../chunks/ssr.js";
const Password = create_ssr_component(
  ($$result, $$props, $$bindings, slots) => {
    let { _password } = $$props;
    if (
      $$props._password === void 0 &&
      $$bindings._password &&
      _password !== void 0
    )
      $$bindings._password(_password);
    return `<details class="password-container"${add_attribute("id", _password.id.toString(), 0)}><summary><table><tr><td>${escape(_password.nickname)}</td></tr> <tr><td>${escape(_password.site_name)}</td></tr></table></summary> <form><input name="id"${add_attribute("value", _password.id.toString(), 0)} hidden> <input type="submit" value="Delete"></form> <form><input name="id"${add_attribute("value", _password.id.toString(), 0)} hidden> <input type="submit" value="Edit"> <input name="username"${add_attribute("value", _password.username, 0)} placeholder="Username"> <input name="password"${add_attribute("value", _password.password, 0)} placeholder="Password"> <input name="email"${add_attribute("value", _password.email, 0)} placeholder="Email"> <input name="nickname"${add_attribute("value", _password.nickname, 0)}> <textarea name="notes" placeholder="Notes">${escape(_password.notes, false)}</textarea> <input name="site_name"${add_attribute("value", _password.site_name, 0)} placeholder="Site Name"> <input name="site_url"${add_attribute("value", _password.site_url, 0)} placeholder="Site URL"></form></details>`;
  },
);
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let passwords = [];
  return `<header data-svelte-h="svelte-1ind219"><div class="logo ml-2"><h1>Helios 3</h1> <span>Created Neo Sahadeo</span></div></header> <main class="mt-8">${each(
    passwords,
    (password) => {
      return `${validate_component(Password, "Password").$$render($$result, { _password: password }, {}, {})}`;
    },
  )}</main>`;
});
export { Page as default };
