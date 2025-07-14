
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
	export const HG: string;
	export const CSF_LANGUAGE: string;
	export const GRADLE_HOME: string;
	export const CSF_XmlOcafResource: string;
	export const MOZ_ENABLE_WAYLAND: string;
	export const CSF_TObjDefaults: string;
	export const GDMSESSION: string;
	export const ANDROID_SDK_ROOT: string;
	export const CSF_MIGRATION_TYPES: string;
	export const SDKMAN_CANDIDATES_API: string;
	export const DRAWHOME: string;
	export const NVIM_LOG_FILE: string;
	export const CSF_SHMessage: string;
	export const NVIM: string;
	export const ANDROID_HOME: string;
	export const XDG_CURRENT_DESKTOP: string;
	export const MYVIMRC: string;
	export const CSF_XCAFDefaults: string;
	export const ALACRITTY_SOCKET: string;
	export const MOTD_SHOWN: string;
	export const USER: string;
	export const CSF_StandardLiteDefaults: string;
	export const SHELL: string;
	export const XDG_SEAT_PATH: string;
	export const VIMRUNTIME: string;
	export const CSF_ShadersDirectory: string;
	export const JAVA_HOME: string;
	export const CSF_EXCEPTION_PROMPT: string;
	export const XDG_VTNR: string;
	export const WINDOWID: string;
	export const HYPRCURSOR_SIZE: string;
	export const ALACRITTY_WINDOW_ID: string;
	export const PT8HOME: string;
	export const XDG_SESSION_CLASS: string;
	export const QT_QPA_PLATFORMTHEME: string;
	export const DRAWDEFAULT: string;
	export const WAYLAND_DISPLAY: string;
	export const XDG_DATA_DIRS: string;
	export const CSF_STEPDefaults: string;
	export const QT_AUTO_SCREEN_SCALE_FACTOR: string;
	export const HYPRLAND_INSTANCE_SIGNATURE: string;
	export const XDG_SESSION_DESKTOP: string;
	export const CASROOT: string;
	export const UBUNTU_MENUPROXY: string;
	export const HYPRLAND_CMD: string;
	export const PWD: string;
	export const MAIL: string;
	export const XDG_SESSION_TYPE: string;
	export const CSF_MDTVTexturesDirectory: string;
	export const MASON: string;
	export const SDKMAN_DIR: string;
	export const CSF_OCCTResourcePath: string;
	export const LOGNAME: string;
	export const XDG_SESSION_PATH: string;
	export const XDG_SEAT: string;
	export const SDKMAN_PLATFORM: string;
	export const GTK_MODULES: string;
	export const DEBUGINFOD_URLS: string;
	export const CSF_TObjMessage: string;
	export const XDG_BACKEND: string;
	export const LV2_PATH: string;
	export const SHLVL: string;
	export const CSF_PluginDefaults: string;
	export const CSF_XSMessage: string;
	export const HL_INITIAL_WORKSPACE_TOKEN: string;
	export const XDG_SESSION_ID: string;
	export const XDG_GREETER_DATA_DIR: string;
	export const CSF_StandardDefaults: string;
	export const LANG: string;
	export const DBUS_SESSION_BUS_ADDRESS: string;
	export const CSF_IGESDefaults: string;
	export const XCURSOR_SIZE: string;
	export const CSF_DrawPluginDefaults: string;
	export const _: string;
	export const PATH: string;
	export const _JAVA_AWT_WM_NONREPARENTING: string;
	export const GDK_SCALE: string;
	export const DESKTOP_SESSION: string;
	export const XDG_RUNTIME_DIR: string;
	export const HOME: string;
	export const SDKMAN_CANDIDATES_DIR: string;
	export const COLORTERM: string;
	export const TERM: string;
	export const ALACRITTY_LOG: string;
	export const DISPLAY: string;
	export const MMGT_CLEAR: string;
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
		HG: string;
		CSF_LANGUAGE: string;
		GRADLE_HOME: string;
		CSF_XmlOcafResource: string;
		MOZ_ENABLE_WAYLAND: string;
		CSF_TObjDefaults: string;
		GDMSESSION: string;
		ANDROID_SDK_ROOT: string;
		CSF_MIGRATION_TYPES: string;
		SDKMAN_CANDIDATES_API: string;
		DRAWHOME: string;
		NVIM_LOG_FILE: string;
		CSF_SHMessage: string;
		NVIM: string;
		ANDROID_HOME: string;
		XDG_CURRENT_DESKTOP: string;
		MYVIMRC: string;
		CSF_XCAFDefaults: string;
		ALACRITTY_SOCKET: string;
		MOTD_SHOWN: string;
		USER: string;
		CSF_StandardLiteDefaults: string;
		SHELL: string;
		XDG_SEAT_PATH: string;
		VIMRUNTIME: string;
		CSF_ShadersDirectory: string;
		JAVA_HOME: string;
		CSF_EXCEPTION_PROMPT: string;
		XDG_VTNR: string;
		WINDOWID: string;
		HYPRCURSOR_SIZE: string;
		ALACRITTY_WINDOW_ID: string;
		PT8HOME: string;
		XDG_SESSION_CLASS: string;
		QT_QPA_PLATFORMTHEME: string;
		DRAWDEFAULT: string;
		WAYLAND_DISPLAY: string;
		XDG_DATA_DIRS: string;
		CSF_STEPDefaults: string;
		QT_AUTO_SCREEN_SCALE_FACTOR: string;
		HYPRLAND_INSTANCE_SIGNATURE: string;
		XDG_SESSION_DESKTOP: string;
		CASROOT: string;
		UBUNTU_MENUPROXY: string;
		HYPRLAND_CMD: string;
		PWD: string;
		MAIL: string;
		XDG_SESSION_TYPE: string;
		CSF_MDTVTexturesDirectory: string;
		MASON: string;
		SDKMAN_DIR: string;
		CSF_OCCTResourcePath: string;
		LOGNAME: string;
		XDG_SESSION_PATH: string;
		XDG_SEAT: string;
		SDKMAN_PLATFORM: string;
		GTK_MODULES: string;
		DEBUGINFOD_URLS: string;
		CSF_TObjMessage: string;
		XDG_BACKEND: string;
		LV2_PATH: string;
		SHLVL: string;
		CSF_PluginDefaults: string;
		CSF_XSMessage: string;
		HL_INITIAL_WORKSPACE_TOKEN: string;
		XDG_SESSION_ID: string;
		XDG_GREETER_DATA_DIR: string;
		CSF_StandardDefaults: string;
		LANG: string;
		DBUS_SESSION_BUS_ADDRESS: string;
		CSF_IGESDefaults: string;
		XCURSOR_SIZE: string;
		CSF_DrawPluginDefaults: string;
		_: string;
		PATH: string;
		_JAVA_AWT_WM_NONREPARENTING: string;
		GDK_SCALE: string;
		DESKTOP_SESSION: string;
		XDG_RUNTIME_DIR: string;
		HOME: string;
		SDKMAN_CANDIDATES_DIR: string;
		COLORTERM: string;
		TERM: string;
		ALACRITTY_LOG: string;
		DISPLAY: string;
		MMGT_CLEAR: string;
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
