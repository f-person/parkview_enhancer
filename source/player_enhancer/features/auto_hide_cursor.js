import { waitForElement } from "../../shared/dom_utils";
import {
	edgeGuiSelector,
	getGuiElement,
	getVideoElement,
	progressSelector,
} from "../selectors";

export const autoHideCursor = async () => {
	await waitForElement(edgeGuiSelector);
	await waitForElement(progressSelector);

	const hideCursor = () => {
		getGuiElement().style.cursor = "none";
	};

	const showCursor = () => {
		getGuiElement().style.cursor = "";
	};

	let cursorHideTimeout = null;
	const queueCursorHide = () => {
		cursorHideTimeout = setTimeout(() => {
			if (!getVideoElement().paused) hideCursor();
		}, 2000);
	};

	getGuiElement().addEventListener("mousemove", () => {
		if (cursorHideTimeout) clearTimeout(cursorHideTimeout);
		showCursor();

		queueCursorHide();
	});

	getVideoElement().addEventListener("pause", showCursor);

	getVideoElement().addEventListener("play", queueCursorHide);
};
