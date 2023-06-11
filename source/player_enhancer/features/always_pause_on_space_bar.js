import { getVideoElement } from "../selectors";

/// Makes spacebar always play/pause the video, even when the player is not focused.
export const alwaysPauseOnSpaceBar = () => {
	document.addEventListener("keydown", (event) => {
		const video = getVideoElement();
		if (!video) return;

		if (
			event.key === " " &&
			event.target.tagName !== "INPUT" &&
			event.target.tagName !== "TEXTAREA"
		) {
			event.preventDefault();

			if (video.paused) {
				video.play();
			} else {
				video.pause();
			}
		}
	});
};
