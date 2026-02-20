import type { AUTO_MODE, DARK_MODE, LIGHT_MODE } from "@constants/constants";

export type SiteConfig = {
	title: string;
	subtitle: string;
	lang:
		| "en"
		| "zh_CN"
		| "zh_TW"
		| "ja"
		| "ko"
		| "es"
		| "th"
		| "vi"
		| "tr"
		| "id";
	themeColor: {
		hue: number;
		fixed: boolean;
	};
	featurePages?: {
		skills?: boolean;
		timeline?: boolean;
	};
	wallpaperMode: {
		defaultMode: "banner" | "fullscreen" | "none";
		showModeSwitchOnMobile?: "off" | "mobile" | "desktop" | "both";
	};
	banner: {
		enable: boolean;
		src: string | string[] | { desktop?: string | string[]; mobile?: string | string[] };
		position?: "top" | "center" | "bottom";
		credit: {
			enable: boolean;
			text: string;
			url?: string;
		};
	};
	toc: {
		enable: boolean;
		depth: 1 | 2 | 3;
	};
	favicon: Favicon[];
};

export type Favicon = {
	src: string;
	theme?: "light" | "dark";
	sizes?: string;
};

export enum LinkPreset {
	Home = 0,
	Archive = 1,
	Skills = 2,
	Timeline = 3,
}

export type NavBarLink = {
	name: string;
	url: string;
	external?: boolean;
};

export type NavBarConfig = {
	links: (NavBarLink | LinkPreset)[];
};

export type ProfileConfig = {
	avatar?: string;
	name: string;
	bio?: string;
	links: {
		name: string;
		url: string;
		icon: string;
	}[];
};

export type LicenseConfig = {
	enable: boolean;
	name: string;
	url: string;
};

export type LIGHT_DARK_MODE =
	| typeof LIGHT_MODE
	| typeof DARK_MODE
	| typeof AUTO_MODE;

export type BlogPostData = {
	body: string;
	title: string;
	published: Date;
	description: string;
	tags: string[];
	draft?: boolean;
	image?: string;
	category?: string;
	prevTitle?: string;
	prevSlug?: string;
	nextTitle?: string;
	nextSlug?: string;
};

export type ExpressiveCodeConfig = {
	theme: string;
};

export type MusicPlayerConfig = {
	enable: boolean;
	mode: "meting" | "local";
	meting_api: string;
	id: string;
	server: string;
	type: string;
};

export type UmamiConfig = {
	enable: boolean;
	baseUrl: string;
	shareId?: string;
	timezone: string;
};

export type WALLPAPER_MODE = "banner" | "fullscreen" | "none";

export type FullscreenWallpaperConfig = {
	src: string | string[] | { desktop?: string | string[]; mobile?: string | string[] };
	position?: "top" | "center" | "bottom";
	carousel?: { enable: boolean; interval: number };
	zIndex?: number;
	opacity?: number;
	blur?: number;
};
