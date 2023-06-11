import optionsStorage from "../../shared/options-storage";
import { getVideoElement } from "../selectors";

/**
 * Adjust the seeking time of the video when pressing left or right arrow keys.
 * @param {number} seconds - The number of seconds to seek when an arrow key is pressed.
 */
export const adjustSeekingTime = async () => {
	const options = await optionsStorage.getAll();
	const seekTime = Number.parseFloat(options.seekTime);
	console.log(seekTime);

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
			video.currentTime = Math.max(video.currentTime - seekTime, 0);
		} else if (event.key === "ArrowRight") {
			event.preventDefault();
			video.currentTime = Math.min(
				video.currentTime + seekTime,
				video.duration
			);
		}
	});
};
