

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.oTlhZc6C.js","_app/immutable/chunks/scheduler.CtbWrGNo.js","_app/immutable/chunks/index.D3NU-Y99.js","_app/immutable/chunks/index.BjqbIcNX.js"];
export const stylesheets = ["_app/immutable/assets/2.Nu9Jkp-F.css"];
export const fonts = [];
