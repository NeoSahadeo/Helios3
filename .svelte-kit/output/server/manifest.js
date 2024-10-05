export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "https://neosahadeo.github.io/Helios3/_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.CgYkMy5X.js","app":"_app/immutable/entry/app.DW11T8aL.js","imports":["_app/immutable/entry/start.CgYkMy5X.js","_app/immutable/chunks/entry.DQSHqH1Q.js","_app/immutable/chunks/scheduler.Ce_0Mfso.js","_app/immutable/chunks/paths.R4-ERajV.js","_app/immutable/entry/app.DW11T8aL.js","_app/immutable/chunks/scheduler.Ce_0Mfso.js","_app/immutable/chunks/index.lAkhB047.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
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
