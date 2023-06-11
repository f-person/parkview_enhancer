import { waitForElement } from "../../shared/dom_utils";
import { getPlayerVideoElement, playerVideoSelector } from "../selectors";

/**
 * Adds a double click event listener to the video player to toggle fullscreen.
 */
export const fullscreenOnDoubleClick = async () => {
	await waitForElement(playerVideoSelector);

	const requestFullScreen = () => {
		const player = getPlayerVideoElement();

		const requestFullScreenFunction =
			player.requestFullscreen ||
			player.mozRequestFullScreen ||
			player.webkitRequestFullscreen ||
			player.msRequestFullscreen;

		if (requestFullScreenFunction) {
			requestFullScreenFunction.call(player);
		}
	};

	const exitFullScreen = () => {
		const exitFullScreenFunction =
			document.exitFullscreen ||
			document.mozCancelFullScreen ||
			document.webkitExitFullscreen ||
			document.msExitFullscreen;

		if (exitFullScreenFunction) {
			exitFullScreenFunction.call(document);
		}
	};

	getPlayerVideoElement().addEventListener("dblclick", (event) => {
		event.preventDefault();

		if (!document.fullscreenElement) {
			requestFullScreen();
		} else {
			exitFullScreen();
		}
	});
};
