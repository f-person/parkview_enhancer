import { getVideoElement } from "../selectors";

/**
 * Adjust the seeking time of the video when pressing left or right arrow keys.
 * @param {number} seconds - The number of seconds to seek when an arrow key is pressed.
 */
export const adjustSeekingTime = (seconds) => {
	console.log("adjustSeekingTime loaded");
	document.addEventListener("keydown", (event) => {
		let video = getVideoElement();
		if (!video) return;

		if (
			event.target.tagName === "INPUT" ||
			event.target.tagName === "TEXTAREA"
		) {
			return;
		}

		if (event.key === "ArrowLeft") {
			event.preventDefault();
			video.currentTime = Math.max(video.currentTime - seconds, 0);
		} else if (event.key === "ArrowRight") {
			event.preventDefault();
			video.currentTime = Math.min(video.currentTime + seconds, video.duration);
		}
	});
};
