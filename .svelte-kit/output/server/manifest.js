export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.C-83SqWr.js","app":"_app/immutable/entry/app.DnzT6Z57.js","imports":["_app/immutable/entry/start.C-83SqWr.js","_app/immutable/chunks/entry.2lwuvP_P.js","_app/immutable/chunks/scheduler.CtbWrGNo.js","_app/immutable/entry/app.DnzT6Z57.js","_app/immutable/chunks/scheduler.CtbWrGNo.js","_app/immutable/chunks/index.BiaQ3zsR.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
