

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/home/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.BglHF0OA.js","_app/immutable/chunks/scheduler.CtbWrGNo.js","_app/immutable/chunks/index.D3NU-Y99.js"];
export const stylesheets = [];
export const fonts = [];
