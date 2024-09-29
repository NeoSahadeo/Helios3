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
		client: {"start":"_app/immutable/entry/start.D_22lpcH.js","app":"_app/immutable/entry/app.BQIJCpJ7.js","imports":["_app/immutable/entry/start.D_22lpcH.js","_app/immutable/chunks/entry.LsINLEnL.js","_app/immutable/chunks/scheduler.CtbWrGNo.js","_app/immutable/chunks/index.BjqbIcNX.js","_app/immutable/entry/app.BQIJCpJ7.js","_app/immutable/chunks/scheduler.CtbWrGNo.js","_app/immutable/chunks/index.D3NU-Y99.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/home",
				pattern: /^\/home\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
