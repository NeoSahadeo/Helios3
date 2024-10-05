import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.Cft1Wzej.js","_app/immutable/chunks/scheduler.Ce_0Mfso.js","_app/immutable/chunks/index.lAkhB047.js","_app/immutable/chunks/utils.DpcWp2Zj.js","_app/immutable/chunks/paths.R4-ERajV.js","_app/immutable/chunks/loadingSpinner.CJmXyUD3.js","_app/immutable/chunks/each.D6YF6ztN.js"];
export const stylesheets = ["_app/immutable/assets/0.D8J4aXlV.css"];
export const fonts = [];
