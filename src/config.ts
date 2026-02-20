import type {
	ExpressiveCodeConfig,
	FullscreenWallpaperConfig,
	LicenseConfig,
	MusicPlayerConfig,
	NavBarConfig,
	ProfileConfig,
	SiteConfig,
	UmamiConfig,
} from "./types/config";
import { LinkPreset } from "./types/config";

export const siteConfig: SiteConfig = {
	title: "Omayma CHAKIR",
	subtitle: "Blog",
	lang: "en",
	themeColor: {
		hue: 285,
		fixed: true,
	},
	featurePages: {
		skills: true,
	},
	wallpaperMode: {
		defaultMode: "banner",
		showModeSwitchOnMobile: "desktop",
	},
	banner: {
		enable: true,
		src: "assets/images/banner11.png",
		position: "bottom",
		credit: {
			enable: false,
			text: "",
			url: "",
		},
	},
	toc: {
		enable: true,
		depth: 2,
	},
	favicon: [
		{
			src: "/favicon/favicon-32x32.ico",
			sizes: "32x32",
		},
		{
			src: "/favicon/favicon-16x16.png",
			sizes: "16x16",
		},
	],
};

export const navBarConfig: NavBarConfig = {
	links: [
		LinkPreset.Home,
		LinkPreset.Archive,
		LinkPreset.Skills,
	],
};

export const profileConfig: ProfileConfig = {
	avatar: "assets/images/moving.gif",
	name: "Security Researcher",
	bio: "",
	links: [
		{
			name: "Steam",
			icon: "fa6-brands:linkedin",
			url: "https://fr.linkedin.com/in/omayma-chakir",
		},
		{
			name: "GitHub",
			icon: "fa6-brands:github",
			url: "https://github.com/omayma-chakir",
		},
	],
};

export const licenseConfig: LicenseConfig = {
	enable: true,
	name: "CC BY-NC-SA 4.0",
	url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
};

export const expressiveCodeConfig: ExpressiveCodeConfig = {
	theme: "github-dark",
};

export const musicPlayerConfig: MusicPlayerConfig = {
	enable: true,
	mode: "local",
	meting_api: "https://www.bilibili.uno/api?server=:server&type=:type&id=:id&auth=:auth&r=:r",
	id: "14164869977",
	server: "netease",
	type: "playlist",
};

export const umamiConfig: UmamiConfig = {
	enable: true,
	baseUrl: "https://cloud.umami.is",
	shareId: "ntg10ABVGoWqh5pP",
	timezone: "Europe/Paris",
};

export const fullscreenWallpaperConfig: FullscreenWallpaperConfig = {
	src: {
		desktop: ["/public/banner1.png"],
		mobile: ["/public/banner1.png"],
	},
	position: "center",
	carousel: { enable: false, interval: 5 },
	zIndex: -1,
	opacity: 0.85,
	blur: 0,
};
