import { autoHideCursor } from "./features/auto_hide_cursor";
import { skipIntro } from "./features/skip_intro";

(() => {
	"use strict";

	console.log("South Park Player Enhancer loaded");

	skipIntro();
	autoHideCursor();
})();
