

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/home/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.BvI_KbMx.js","_app/immutable/chunks/scheduler.Ce_0Mfso.js","_app/immutable/chunks/index.lAkhB047.js","_app/immutable/chunks/each.D6YF6ztN.js","_app/immutable/chunks/utils.DpcWp2Zj.js","_app/immutable/chunks/paths.R4-ERajV.js"];
export const stylesheets = ["_app/immutable/assets/3.4gTRk0rZ.css"];
export const fonts = [];
