import { waitForElement } from "../../shared/dom_utils";
import {
	getGuiElement,
	getPlayerVideoElement,
	getVideoElement,
	playerVideoSelector,
} from "../selectors";

/**
 * Adds a click event listener to the video player to toggle play/pause.
 */
export const togglePauseOnClick = async () => {
	await waitForElement(playerVideoSelector);

	getPlayerVideoElement().addEventListener("click", (event) => {
		const video = getVideoElement();
		if (!video || event.target !== getGuiElement()) return;

		event.preventDefault();

		if (video.paused) {
			video.play();
		} else {
			video.pause();
		}
	});
};
