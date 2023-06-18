import { waitForElement } from "../../shared/dom_utils";
import optionsStorage from "../../shared/options-storage";

/**
 * Overrides all random episode buttons to select a **truly** random episode.
 */
export const trueRandomEpisode = async () => {
	const { overrideRandom } = await optionsStorage.getAll();
	if (!overrideRandom) {
		return;
	}

	const randomLinkSelector = 'a[href$="/random-episode"]';

	await waitForElement(randomLinkSelector);

	const randomLinks = document.querySelectorAll(randomLinkSelector);
	if (!randomLinks || randomLinks.length === 0) {
		return;
	}

	for (const link of randomLinks) {
		link.href = "#";
		link.addEventListener("click", (event) => {
			event.preventDefault();
			event.stopPropagation();

			const allEpisodes = require("../../shared/episodes.json");

			const randomEpisodeIndex = Math.floor(Math.random() * allEpisodes.length);
			const randomEpisodeUrl = `/episodes${allEpisodes[randomEpisodeIndex]}`;

			window.location.href = randomEpisodeUrl;
		});
	}
};
