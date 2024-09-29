

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.Cgm-Snwd.js","_app/immutable/chunks/scheduler.CtbWrGNo.js","_app/immutable/chunks/index.BiaQ3zsR.js"];
export const stylesheets = ["_app/immutable/assets/2.Nu9Jkp-F.css"];
export const fonts = [];
