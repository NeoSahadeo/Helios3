import { c as create_ssr_component, v as validate_component } from "../../chunks/ssr.js";
const css$1 = {
  code: "#loading.svelte-1oo8a4x{margin:auto auto}",
  map: '{"version":3,"file":"loading.svelte","sources":["loading.svelte"],"sourcesContent":["<style>\\n#loading\\t{\\n\\tmargin: auto auto;\\n}\\n</style>\\n<div id=\\"loading\\">\\n<p>Helios3 is loading...</p>\\n<p>\\n[Log]:\\n</p>\\n</div>\\n"],"names":[],"mappings":"AACA,uBAAS,CACR,MAAM,CAAE,IAAI,CAAC,IACd"}'
};
const Loading = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<div id="loading" class="svelte-1oo8a4x" data-svelte-h="svelte-1uiyadt"><p>Helios3 is loading...</p> <p>[Log]:</p></div>`;
});
const Notify = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="notify" data-svelte-h="svelte-ijqjpk">This is a notification</div>`;
});
const css = {
  code: "#notify-container.svelte-pzqj0{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);background-color:red}",
  map: '{"version":3,"file":"notification.svelte","sources":["notification.svelte"],"sourcesContent":["<script lang=\\"ts\\">import \\"../notfiy\\";\\nimport Notify from \\"./notify.svelte\\";\\n<\/script>\\n\\n<style>\\n\\t#notify-container {\\n\\t\\tposition: absolute;\\n\\t\\ttop: 50%;\\n\\t\\tleft: 50%;\\n\\t\\ttransform: translate(-50%, -50%);\\n\\t\\tbackground-color: red;\\n\\t}\\n</style>\\n\\n<div id=\\"notify-container\\">\\n<Notify />\\n</div>\\n"],"names":[],"mappings":"AAKC,8BAAkB,CACjB,QAAQ,CAAE,QAAQ,CAClB,GAAG,CAAE,GAAG,CACR,IAAI,CAAE,GAAG,CACT,SAAS,CAAE,UAAU,IAAI,CAAC,CAAC,IAAI,CAAC,CAChC,gBAAgB,CAAE,GACnB"}'
};
const Notification = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div id="notify-container" class="svelte-pzqj0">${validate_component(Notify, "Notify").$$render($$result, {}, {}, {})}</div>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Notification, "Notification").$$render($$result, {}, {}, {})} ${`${validate_component(Loading, "Loading").$$render($$result, {}, {}, {})}`}`;
});
export {
  Layout as default
};
