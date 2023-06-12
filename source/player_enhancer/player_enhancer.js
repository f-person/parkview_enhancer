import { adjustSeekingTime } from "./features/adjust_seeking_time";
import { alwaysPauseOnSpaceBar } from "./features/always_pause_on_space_bar";
import { autoHideCursor } from "./features/auto_hide_cursor";
import { fullscreenOnDoubleClick } from "./features/fullscreen_on_double_click";
import { scrollableEpisodes } from "./features/scrollable_episodes";
import { skipIntro } from "./features/skip_intro";
import { togglePauseOnClick } from "./features/toggle_pause_on_click";

(() => {
	"use strict";

	console.log("South Park Player Enhancer loaded");

	skipIntro();
	autoHideCursor();
	alwaysPauseOnSpaceBar();
	adjustSeekingTime();
	fullscreenOnDoubleClick();
	togglePauseOnClick();
	scrollableEpisodes();
})();
