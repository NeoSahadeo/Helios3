

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/home/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.BIMj5VW6.js","_app/immutable/chunks/scheduler.Ce_0Mfso.js","_app/immutable/chunks/index.BEC4av9B.js","_app/immutable/chunks/utils.D2i4nqSq.js","_app/immutable/chunks/paths.DJJFl3Fx.js"];
export const stylesheets = ["_app/immutable/assets/3.DZjwzRGy.css"];
export const fonts = [];
