
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://svelte.dev/docs/kit/configuration#env) (if configured).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```bash
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const XDG_GREETER_DATA_DIR: string;
	export const LANG: string;
	export const CSF_IGESDefaults: string;
	export const XCURSOR_SIZE: string;
	export const DBUS_SESSION_BUS_ADDRESS: string;
	export const _JAVA_AWT_WM_NONREPARENTING: string;
	export const GDK_SCALE: string;
	export const CSF_XCAFDefaults: string;
	export const ALACRITTY_SOCKET: string;
	export const MOTD_SHOWN: string;
	export const ALACRITTY_LOG: string;
	export const CSF_StandardLiteDefaults: string;
	export const SHELL: string;
	export const HG: string;
	export const XDG_SEAT_PATH: string;
	export const CSF_LANGUAGE: string;
	export const CSF_ShadersDirectory: string;
	export const GRADLE_HOME: string;
	export const OLDPWD: string;
	export const CSF_XmlOcafResource: string;
	export const JAVA_HOME: string;
	export const MOZ_ENABLE_WAYLAND: string;
	export const CSF_EXCEPTION_PROMPT: string;
	export const XDG_VTNR: string;
	export const WINDOWID: string;
	export const ANDROID_SDK_ROOT: string;
	export const HYPRCURSOR_SIZE: string;
	export const CSF_MIGRATION_TYPES: string;
	export const ALACRITTY_WINDOW_ID: string;
	export const PT8HOME: string;
	export const XDG_SESSION_CLASS: string;
	export const QT_QPA_PLATFORMTHEME: string;
	export const NVIM_LOG_FILE: string;
	export const DRAWDEFAULT: string;
	export const CSF_SHMessage: string;
	export const WAYLAND_DISPLAY: string;
	export const ANDROID_HOME: string;
	export const XDG_DATA_DIRS: string;
	export const MYVIMRC: string;
	export const CSF_STEPDefaults: string;
	export const SDKMAN_PLATFORM: string;
	export const QT_AUTO_SCREEN_SCALE_FACTOR: string;
	export const HYPRLAND_INSTANCE_SIGNATURE: string;
	export const XDG_SESSION_DESKTOP: string;
	export const CASROOT: string;
	export const SHLVL: string;
	export const UBUNTU_MENUPROXY: string;
	export const DISPLAY: string;
	export const HYPRLAND_CMD: string;
	export const PWD: string;
	export const MAIL: string;
	export const XDG_SESSION_TYPE: string;
	export const CSF_MDTVTexturesDirectory: string;
	export const SDKMAN_DIR: string;
	export const PATH: string;
	export const CSF_OCCTResourcePath: string;
	export const LOGNAME: string;
	export const XDG_SESSION_PATH: string;
	export const XDG_SEAT: string;
	export const GTK_MODULES: string;
	export const USER: string;
	export const LV2_PATH: string;
	export const CSF_PluginDefaults: string;
	export const CSF_XSMessage: string;
	export const HL_INITIAL_WORKSPACE_TOKEN: string;
	export const _: string;
	export const COLORTERM: string;
	export const MASON: string;
	export const CSF_TObjMessage: string;
	export const XDG_RUNTIME_DIR: string;
	export const SDKMAN_CANDIDATES_DIR: string;
	export const TERM: string;
	export const MMGT_CLEAR: string;
	export const CSF_TObjDefaults: string;
	export const HOME: string;
	export const GDMSESSION: string;
	export const VIMRUNTIME: string;
	export const SDKMAN_CANDIDATES_API: string;
	export const DRAWHOME: string;
	export const XDG_CURRENT_DESKTOP: string;
	export const DEBUGINFOD_URLS: string;
	export const XDG_BACKEND: string;
	export const DESKTOP_SESSION: string;
	export const CSF_DrawPluginDefaults: string;
	export const CSF_StandardDefaults: string;
	export const XDG_SESSION_ID: string;
	export const NVIM: string;
	export const NODE_ENV: string;
}

/**
 * Similar to [`$env/static/private`](https://svelte.dev/docs/kit/$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {
	
}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/main/packages/adapter-node) (or running [`vite preview`](https://svelte.dev/docs/kit/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://svelte.dev/docs/kit/configuration#env) (if configured).
 * 
 * This module cannot be imported into client-side code.
 * 
 * Dynamic environment variables cannot be used during prerendering.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		XDG_GREETER_DATA_DIR: string;
		LANG: string;
		CSF_IGESDefaults: string;
		XCURSOR_SIZE: string;
		DBUS_SESSION_BUS_ADDRESS: string;
		_JAVA_AWT_WM_NONREPARENTING: string;
		GDK_SCALE: string;
		CSF_XCAFDefaults: string;
		ALACRITTY_SOCKET: string;
		MOTD_SHOWN: string;
		ALACRITTY_LOG: string;
		CSF_StandardLiteDefaults: string;
		SHELL: string;
		HG: string;
		XDG_SEAT_PATH: string;
		CSF_LANGUAGE: string;
		CSF_ShadersDirectory: string;
		GRADLE_HOME: string;
		OLDPWD: string;
		CSF_XmlOcafResource: string;
		JAVA_HOME: string;
		MOZ_ENABLE_WAYLAND: string;
		CSF_EXCEPTION_PROMPT: string;
		XDG_VTNR: string;
		WINDOWID: string;
		ANDROID_SDK_ROOT: string;
		HYPRCURSOR_SIZE: string;
		CSF_MIGRATION_TYPES: string;
		ALACRITTY_WINDOW_ID: string;
		PT8HOME: string;
		XDG_SESSION_CLASS: string;
		QT_QPA_PLATFORMTHEME: string;
		NVIM_LOG_FILE: string;
		DRAWDEFAULT: string;
		CSF_SHMessage: string;
		WAYLAND_DISPLAY: string;
		ANDROID_HOME: string;
		XDG_DATA_DIRS: string;
		MYVIMRC: string;
		CSF_STEPDefaults: string;
		SDKMAN_PLATFORM: string;
		QT_AUTO_SCREEN_SCALE_FACTOR: string;
		HYPRLAND_INSTANCE_SIGNATURE: string;
		XDG_SESSION_DESKTOP: string;
		CASROOT: string;
		SHLVL: string;
		UBUNTU_MENUPROXY: string;
		DISPLAY: string;
		HYPRLAND_CMD: string;
		PWD: string;
		MAIL: string;
		XDG_SESSION_TYPE: string;
		CSF_MDTVTexturesDirectory: string;
		SDKMAN_DIR: string;
		PATH: string;
		CSF_OCCTResourcePath: string;
		LOGNAME: string;
		XDG_SESSION_PATH: string;
		XDG_SEAT: string;
		GTK_MODULES: string;
		USER: string;
		LV2_PATH: string;
		CSF_PluginDefaults: string;
		CSF_XSMessage: string;
		HL_INITIAL_WORKSPACE_TOKEN: string;
		_: string;
		COLORTERM: string;
		MASON: string;
		CSF_TObjMessage: string;
		XDG_RUNTIME_DIR: string;
		SDKMAN_CANDIDATES_DIR: string;
		TERM: string;
		MMGT_CLEAR: string;
		CSF_TObjDefaults: string;
		HOME: string;
		GDMSESSION: string;
		VIMRUNTIME: string;
		SDKMAN_CANDIDATES_API: string;
		DRAWHOME: string;
		XDG_CURRENT_DESKTOP: string;
		DEBUGINFOD_URLS: string;
		XDG_BACKEND: string;
		DESKTOP_SESSION: string;
		CSF_DrawPluginDefaults: string;
		CSF_StandardDefaults: string;
		XDG_SESSION_ID: string;
		NVIM: string;
		NODE_ENV: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: `${string}`]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * Dynamic environment variables cannot be used during prerendering.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
