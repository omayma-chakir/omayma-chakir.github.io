<script lang="ts">
    import {
        WALLPAPER_BANNER,
        WALLPAPER_FULLSCREEN,
        WALLPAPER_NONE,
    } from "@constants/constants";
    import I18nKey from "@i18n/i18nKey";
    import { i18n } from "@i18n/translation";
    import Icon from "@iconify/svelte";
    import {
        getStoredWallpaperMode,
        setWallpaperMode,
    } from "@utils/setting-utils";
    import type { WALLPAPER_MODE } from "@/types/config";
    import { onMount } from "svelte";

    const wallpaperOptions: { mode: WALLPAPER_MODE; icon: string; label: I18nKey }[] = [
        { mode: WALLPAPER_BANNER,     icon: "material-symbols:image-outline",      label: I18nKey.wallpaperBanner },
        { mode: WALLPAPER_FULLSCREEN, icon: "material-symbols:wallpaper",           label: I18nKey.wallpaperFullscreen },
        { mode: WALLPAPER_NONE,       icon: "material-symbols:hide-image-outline",  label: I18nKey.wallpaperNone },
    ];

    let mode: WALLPAPER_MODE = $state(WALLPAPER_BANNER);
    let panelOpen: boolean   = $state(false);

    onMount(() => {
        mode = getStoredWallpaperMode();
    });

    let currentIcon = $derived(
        wallpaperOptions.find(opt => opt.mode === mode)?.icon ?? wallpaperOptions[0].icon
    );

    function switchWallpaperMode(newMode: WALLPAPER_MODE) {
        mode      = newMode;
        panelOpen = false;
        setWallpaperMode(newMode);
        applyModeToDOM(newMode);
    }

    function applyModeToDOM(newMode: WALLPAPER_MODE) {
        const body               = document.body;
        const bannerWrapper      = document.getElementById("banner-wrapper");
        const fullscreenWallpaper = document.getElementById("fullscreen-wallpaper");
        const mainContent        = document.querySelector<HTMLElement>(".wallpaper-main-content");

        body.classList.remove("enable-banner", "wallpaper-transparent", "no-banner-mode");

        switch (newMode) {
            case "banner":
                body.classList.add("enable-banner");
                if (bannerWrapper)       bannerWrapper.style.display       = "";
                if (fullscreenWallpaper) fullscreenWallpaper.style.display = "none";
                if (mainContent)         mainContent.style.top             = "";
                break;

            case "fullscreen":
                body.classList.add("wallpaper-transparent");
                if (bannerWrapper)       bannerWrapper.style.display       = "none";
                if (fullscreenWallpaper) fullscreenWallpaper.style.display = "block";
                if (mainContent)         mainContent.style.top             = "5.5rem";
                break;

            case "none":
                body.classList.add("no-banner-mode");
                if (bannerWrapper)       bannerWrapper.style.display       = "none";
                if (fullscreenWallpaper) fullscreenWallpaper.style.display = "none";
                if (mainContent)         mainContent.style.top             = "5.5rem";
                break;
        }
    }

    function togglePanel() {
        panelOpen = !panelOpen;
    }

    function handleWindowClick(event: MouseEvent) {
        if (!panelOpen) return;
        const target    = event.target as HTMLElement;
        const switchBtn = document.getElementById("wallpaper-mode-switch");
        const panel     = document.getElementById("wallpaper-mode-panel");
        if (switchBtn && !switchBtn.contains(target) && panel && !panel.contains(target)) {
            panelOpen = false;
        }
    }
</script>

<svelte:window onclick={handleWindowClick} />

<style>
    button[data-active="true"] {
        background-color: var(--primary) !important;
        color: white !important;
    }
    button[data-active="true"]:hover {
        background-color: var(--primary) !important;
        color: white !important;
    }
    :global(button[data-active="true"])::before {
        display: none !important;
    }
    :global(.theme-switch-btn)::before {
        transition: transform 75ms ease-out, background-color 0ms !important;
    }
    .float-panel-closed {
        opacity: 0;
        pointer-events: none;
        transform: translateY(-0.5rem) scale(0.95);
        transition: opacity 150ms ease, transform 150ms ease;
    }
    .float-panel-open {
        opacity: 1;
        pointer-events: auto;
        transform: translateY(0) scale(1);
        transition: opacity 150ms ease, transform 150ms ease;
    }
</style>

<div class="relative z-50" role="menu" tabindex="-1">
    <button
        aria-label="Wallpaper Mode"
        role="menuitem"
        class="relative btn-plain scale-animation rounded-lg h-11 w-11 active:scale-90 theme-switch-btn"
        id="wallpaper-mode-switch"
        onclick={togglePanel}
    >
        <Icon icon={currentIcon} class="text-[1.25rem]"></Icon>
    </button>
    <div
        id="wallpaper-mode-panel"
        class="absolute top-11 -right-2 pt-2 z-50"
        class:float-panel-closed={!panelOpen}
        class:float-panel-open={panelOpen}
    >
        <div class="card-base p-2 shadow-lg rounded-xl min-w-[10rem]">
            {#each wallpaperOptions as option}
                <button
                    class="flex transition whitespace-nowrap items-center !justify-start w-full btn-plain rounded-lg h-11 px-3 font-medium active:scale-95 theme-switch-btn mb-0.5 last:mb-0"
                    data-active={mode === option.mode}
                    class:scale-animation={mode !== option.mode}
                    onclick={() => switchWallpaperMode(option.mode)}
                >
                    <Icon icon={option.icon} class="text-[1.25rem] mr-3"></Icon>
                    {i18n(option.label)}
                </button>
            {/each}
        </div>
    </div>
</div>
