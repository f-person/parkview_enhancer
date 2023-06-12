import { waitForElement } from "../../shared/dom_utils";

/**
 * Makes the episodes' list under "Watching" scrollable.
 */
export const scrollableEpisodes = async () => {
	const carouselSelector = ".carousel-viewport";

	const carousel = await waitForElement(carouselSelector);
	carousel.style.overflowX = "scroll";
};
