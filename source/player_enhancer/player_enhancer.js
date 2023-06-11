import { adjustSeekingTime } from "./features/adjust_seeking_time";
import { alwaysPauseOnSpaceBar } from "./features/always_pause_on_space_bar";
import { autoHideCursor } from "./features/auto_hide_cursor";
import { skipIntro } from "./features/skip_intro";

(() => {
	"use strict";

	console.log("South Park Player Enhancer loaded");

	skipIntro();
	autoHideCursor();
	alwaysPauseOnSpaceBar();
	adjustSeekingTime();
})();
