import type {
	ExpressiveCodeConfig,
	LicenseConfig,
	NavBarConfig,
	ProfileConfig,
	SiteConfig,
} from "./types/config";
import { LinkPreset } from "./types/config";

export const siteConfig: SiteConfig = {
	title: "Omayma CHAKIR",
	subtitle: "Blog",
	lang: "en", // Language code, e.g. 'en', 'zh_CN', 'ja', etc.
	themeColor: {
		hue: 285, // Default hue for the theme color, from 0 to 360. e.g. red: 0, teal: 200, cyan: 250, pink: 345
		fixed: true, // Hide the theme color picker for visitors
	},


    featurePages: {
        skills: true,    
    },


	banner: {
		enable: true,
		src: "assets/images/banner11.png", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
		position: "bottom", // Equivalent to object-position, only supports 'top', 'center', 'bottom'. 'center' by default
		credit: {
			enable: false, 
			text: "", // Credit text to be displayed
			url: "", // (Optional) URL link to the original artwork or artist's page
		},
	},
	toc: {
		enable: true, // Display the table of contents on the right side of the post
		depth: 2, // Maximum heading depth to show in the table, from 1 to 3
	},
	favicon: [
		// Leave this array empty to use the default favicon
		 {
		   src: '/favicon/favicon-32x32.ico',    
		//   theme: 'light',              
		  sizes: '32x32',          
		 },
		 {
		   src: '/favicon/favicon-16x16.png',   
		//   theme: 'light',              
		  sizes: '16x16',              
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

import type { MusicPlayerConfig } from "./types/config";

export const musicPlayerConfig: MusicPlayerConfig = {
  enable: true,
  mode: "local",          // use "meting" for online playlists
  meting_api: "https://www.bilibili.uno/api?server=:server&type=:type&id=:id&auth=:auth&r=:r",
  id: "14164869977",
  server: "netease",
  type: "playlist",
};

import type { UmamiConfig } from './types/config';

export const umamiConfig: UmamiConfig = {
  enable: true,
  baseUrl: "https://cloud.umami.is",
  shareId: "ntg10ABVGoWqh5pP",
  timezone: "Europe/Paris",
};


