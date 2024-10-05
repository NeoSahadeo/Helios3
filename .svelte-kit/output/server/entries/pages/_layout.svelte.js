import { c as create_ssr_component, v as validate_component, a as add_attribute, e as escape, b as subscribe, d as each } from "../../chunks/ssr.js";
import { n as notify, m as modal } from "../../chunks/store.js";
const LoadingSpinner = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1.7em" height="1.7em" viewBox="0 0 24 24"><g fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path stroke-dasharray="16" stroke-dashoffset="16" d="M12 3c4.97 0 9 4.03 9 9"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.3s" values="16;0"></animate><animateTransform attributeName="transform" dur="1.5s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"></animateTransform></path><path stroke-dasharray="64" stroke-dashoffset="64" stroke-opacity="0.3" d="M12 3c4.97 0 9 4.03 9 9c0 4.97 -4.03 9 -9 9c-4.97 0 -9 -4.03 -9 -9c0 -4.97 4.03 -9 9 -9Z"><animate fill="freeze" attributeName="stroke-dashoffset" dur="1.2s" values="64;0"></animate></path></g></svg>`;
});
const css$2 = {
  code: "#loading.svelte-8y5bvm{width:-moz-fit-content;width:fit-content}",
  map: '{"version":3,"file":"loading.svelte","sources":["loading.svelte"],"sourcesContent":["<script lang=\\"ts\\">import LoadingSpinner from \\"./loadingSpinner.svelte\\";\\n<\/script>\\n\\n<div id=\\"loading\\" class=\\"m-auto flex item-center justify-center flex-col\\">\\n  <h1 class=\\"text-2xl\\">Helios3 is loading</h1>\\n  <div class=\\"mx-auto mt-6\\">\\n    <LoadingSpinner />\\n  </div>\\n</div>\\n\\n<style>\\n  #loading {\\n    width: -moz-fit-content;\\n    width: fit-content;\\n  }\\n</style>\\n"],"names":[],"mappings":"AAWE,sBAAS,CACP,KAAK,CAAE,gBAAgB,CACvB,KAAK,CAAE,WACT"}'
};
const Loading = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<div id="loading" class="m-auto flex item-center justify-center flex-col svelte-8y5bvm"><h1 class="text-2xl" data-svelte-h="svelte-mqabcq">Helios3 is loading</h1> <div class="mx-auto mt-6">${validate_component(LoadingSpinner, "LoadingSpinner").$$render($$result, {}, {}, {})}</div> </div>`;
});
const Notify = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let class_list;
  let { message = "", id, type, dismissable } = $$props;
  if ($$props.message === void 0 && $$bindings.message && message !== void 0) $$bindings.message(message);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0) $$bindings.id(id);
  if ($$props.type === void 0 && $$bindings.type && type !== void 0) $$bindings.type(type);
  if ($$props.dismissable === void 0 && $$bindings.dismissable && dismissable !== void 0) $$bindings.dismissable(dismissable);
  class_list = `notify shadow-lg ${type}`;
  return `<div${add_attribute("class", class_list, 0)}${add_attribute("id", id.toString(), 0)}>${escape(message)} <button class="ml-auto" data-svelte-h="svelte-1h5r36w"><svg xmlns="http://www.w3.org/2000/svg" width="1.7em" height="1.7em" viewBox="0 0 36 36"><path d="M18 2a16 16 0 1 0 16 16A16 16 0 0 0 18 2m8 22.1a1.4 1.4 0 0 1-2 2l-6-6l-6 6.02a1.4 1.4 0 1 1-2-2l6-6.04l-6.17-6.22a1.4 1.4 0 1 1 2-2L18 16.1l6.17-6.17a1.4 1.4 0 1 1 2 2L20 18.08Z" class="clr-i-solid clr-i-solid-path-1"></path><path fill="none" d="M0 0h36v36H0z"></path></svg></button></div>`;
});
const css$1 = {
  code: "#notify-container.svelte-1eg0o4e{position:fixed;bottom:0px;right:0px;margin:0em 1em 1em 0;z-index:999;display:flex;flex-direction:column;gap:0.3em}",
  map: '{"version":3,"file":"notification.svelte","sources":["notification.svelte"],"sourcesContent":["<script lang=\\"ts\\">import Notify from \\"./notify.svelte\\";\\nimport { notify } from \\"$lib/store\\";\\n<\/script>\\n\\n<div id=\\"notify-container\\">\\n  {#each $notify as message}\\n    <Notify\\n      message={message.message}\\n      id={message.id}\\n      type={message.type}\\n      dismissable={message.dismissable}\\n    />\\n  {/each}\\n</div>\\n\\n<style>\\n  #notify-container {\\n    position: fixed;\\n    bottom: 0px;\\n    right: 0px;\\n    margin: 0em 1em 1em 0;\\n    z-index: 999;\\n    display: flex;\\n    flex-direction: column;\\n    gap: 0.3em;\\n  }\\n</style>\\n"],"names":[],"mappings":"AAgBE,gCAAkB,CAChB,QAAQ,CAAE,KAAK,CACf,MAAM,CAAE,GAAG,CACX,KAAK,CAAE,GAAG,CACV,MAAM,CAAE,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,CAAC,CACrB,OAAO,CAAE,GAAG,CACZ,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,GAAG,CAAE,KACP"}'
};
const Notification = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $notify, $$unsubscribe_notify;
  $$unsubscribe_notify = subscribe(notify, (value) => $notify = value);
  $$result.css.add(css$1);
  $$unsubscribe_notify();
  return `<div id="notify-container" class="svelte-1eg0o4e">${each($notify, (message) => {
    return `${validate_component(Notify, "Notify").$$render(
      $$result,
      {
        message: message.message,
        id: message.id,
        type: message.type,
        dismissable: message.dismissable
      },
      {},
      {}
    )}`;
  })} </div>`;
});
const css = {
  code: "dialog.svelte-rm040g.svelte-rm040g{background-color:black;z-index:20;width:100%;height:100%;position:fixed}form.svelte-rm040g input.svelte-rm040g,form.svelte-rm040g textarea.svelte-rm040g{outline:0px solid gray;width:100%;padding:0.2em 0.5em;border-radius:0.135em;background-color:black}form.svelte-rm040g input.svelte-rm040g:hover,form.svelte-rm040g textarea.svelte-rm040g:hover,form.svelte-rm040g input.svelte-rm040g:focus,form.svelte-rm040g textarea.svelte-rm040g:focus{outline:1px solid gray}",
  map: '{"version":3,"file":"createModal.svelte","sources":["createModal.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { create_password } from \\"$lib/utils\\";\\nimport { modal } from \\"$lib/store\\";\\nimport { fetch_passwords } from \\"$lib/utils\\";\\nimport { passwords_store } from \\"$lib/store\\";\\nlet _password = {}, _dialog, _form, _generated_password;\\nconst close_modal = () => {\\n  if (confirm(\\"Are you sure you want to close this form?\\")) {\\n    modal.close();\\n    _password = {};\\n  }\\n};\\nmodal.subscribe((value) => {\\n  if (_dialog) {\\n    value ? _dialog.classList.add(\\"flex\\") : _dialog.classList.remove(\\"flex\\");\\n  }\\n});\\nconst save_form = async (event) => {\\n  const formData = new FormData(event.target);\\n  const response = await create_password(formData);\\n  passwords_store.set(await fetch_passwords());\\n  _password = {};\\n  modal.close();\\n};\\n<\/script>\\n\\n<dialog class=\\"items-center justify-center flex-col\\" bind:this={_dialog}>\\n  <div\\n    style=\\"background-color: #070707;\\"\\n    class=\\"flex flex-col px-4 py-2 pb-5 sm:rounded w-full sm:max-w-lg sm:h-auto h-full\\"\\n  >\\n    <form\\n      bind:this={_form}\\n      class=\\"flex flex-col\\"\\n      on:submit|preventDefault={save_form}\\n    >\\n      <h1 class=\\"text-lg underline font-bold\\">Create a password</h1>\\n      <input\\n        name=\\"username\\"\\n        bind:value={_password.username}\\n        placeholder=\\"Username\\"\\n      />\\n      <div class=\\"flex\\">\\n        <input\\n          name=\\"password\\"\\n          bind:value={_password.password}\\n          placeholder=\\"Password\\"\\n        />\\n      </div>\\n      <input name=\\"email\\" bind:value={_password.email} placeholder=\\"Email\\" />\\n      <input\\n        name=\\"nickname\\"\\n        bind:value={_password.nickname}\\n        placeholder=\\"Nickname\\"\\n      />\\n      <textarea name=\\"notes\\" placeholder=\\"Notes\\" bind:value={_password.notes}\\n      ></textarea>\\n      <input\\n        name=\\"site_name\\"\\n        bind:value={_password.site_name}\\n        placeholder=\\"Site Name\\"\\n      />\\n      <input\\n        name=\\"site_url\\"\\n        bind:value={_password.site_url}\\n        placeholder=\\"Site URL\\"\\n      />\\n      <button\\n        class=\\"bg-blue-600 max-w-32 rounded mt-4 py-3 md:py-2 hover:bg-blue-900\\"\\n        >Create</button\\n      >\\n    </form>\\n    <button\\n      class=\\"bg-red-600 max-w-32 rounded px-3 py-3 md:py-2 mt-4 hover:bg-red-900\\"\\n      on:click={close_modal}>Close</button\\n    >\\n  </div>\\n</dialog>\\n\\n<style>\\n  dialog {\\n    background-color: black;\\n    z-index: 20;\\n    width: 100%;\\n    height: 100%;\\n    position: fixed;\\n  }\\n  form input,\\n  form textarea {\\n    outline: 0px solid gray;\\n    width: 100%;\\n    padding: 0.2em 0.5em;\\n    border-radius: 0.135em;\\n    background-color: black;\\n  }\\n  form input:hover,\\n  form textarea:hover,\\n  form input:focus,\\n  form textarea:focus {\\n    outline: 1px solid gray;\\n  }\\n</style>\\n"],"names":[],"mappings":"AA+EE,kCAAO,CACL,gBAAgB,CAAE,KAAK,CACvB,OAAO,CAAE,EAAE,CACX,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,QAAQ,CAAE,KACZ,CACA,kBAAI,CAAC,mBAAK,CACV,kBAAI,CAAC,sBAAS,CACZ,OAAO,CAAE,GAAG,CAAC,KAAK,CAAC,IAAI,CACvB,KAAK,CAAE,IAAI,CACX,OAAO,CAAE,KAAK,CAAC,KAAK,CACpB,aAAa,CAAE,OAAO,CACtB,gBAAgB,CAAE,KACpB,CACA,kBAAI,CAAC,mBAAK,MAAM,CAChB,kBAAI,CAAC,sBAAQ,MAAM,CACnB,kBAAI,CAAC,mBAAK,MAAM,CAChB,kBAAI,CAAC,sBAAQ,MAAO,CAClB,OAAO,CAAE,GAAG,CAAC,KAAK,CAAC,IACrB"}'
};
const CreateModal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let _password = {}, _dialog, _form;
  modal.subscribe((value) => {
  });
  $$result.css.add(css);
  return `<dialog class="items-center justify-center flex-col svelte-rm040g"${add_attribute("this", _dialog, 0)}><div style="background-color: #070707;" class="flex flex-col px-4 py-2 pb-5 sm:rounded w-full sm:max-w-lg sm:h-auto h-full"><form class="flex flex-col svelte-rm040g"${add_attribute("this", _form, 0)}><h1 class="text-lg underline font-bold" data-svelte-h="svelte-1v325rx">Create a password</h1> <input name="username" placeholder="Username" class="svelte-rm040g"${add_attribute("value", _password.username, 0)}> <div class="flex"><input name="password" placeholder="Password" class="svelte-rm040g"${add_attribute("value", _password.password, 0)}></div> <input name="email" placeholder="Email" class="svelte-rm040g"${add_attribute("value", _password.email, 0)}> <input name="nickname" placeholder="Nickname" class="svelte-rm040g"${add_attribute("value", _password.nickname, 0)}> <textarea name="notes" placeholder="Notes" class="svelte-rm040g">${escape(_password.notes || "")}</textarea> <input name="site_name" placeholder="Site Name" class="svelte-rm040g"${add_attribute("value", _password.site_name, 0)}> <input name="site_url" placeholder="Site URL" class="svelte-rm040g"${add_attribute("value", _password.site_url, 0)}> <button class="bg-blue-600 max-w-32 rounded mt-4 py-3 md:py-2 hover:bg-blue-900" data-svelte-h="svelte-11738cp">Create</button></form> <button class="bg-red-600 max-w-32 rounded px-3 py-3 md:py-2 mt-4 hover:bg-red-900" data-svelte-h="svelte-njvsul">Close</button></div> </dialog>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Notification, "Notification").$$render($$result, {}, {}, {})} ${validate_component(CreateModal, "CreateModal").$$render($$result, {}, {}, {})} ${`${validate_component(Loading, "Loading").$$render($$result, {}, {}, {})}`}`;
});
export {
  Layout as default
};
