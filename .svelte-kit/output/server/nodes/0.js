import * as universal from "../entries/pages/_layout.ts.js";

export const index = 0;
let component_cache;
export const component = async () =>
  (component_cache ??= (await import("../entries/pages/_layout.svelte.js"))
    .default);
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = [
  "_app/immutable/nodes/0.D57oRKE7.js",
  "_app/immutable/chunks/scheduler.Ce_0Mfso.js",
  "_app/immutable/chunks/index.BEC4av9B.js",
  "_app/immutable/chunks/utils.D2i4nqSq.js",
  "_app/immutable/chunks/paths.DJJFl3Fx.js",
];
export const stylesheets = ["_app/immutable/assets/0.xY2jwOkZ.css"];
export const fonts = [];
