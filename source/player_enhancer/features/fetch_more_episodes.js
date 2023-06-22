import { waitForElement } from "../../shared/dom_utils";

const itemsSelector = ".items-wrap .item";

/**
 * Fetches more episodes as you scroll the episode list under "Watching".
 */
export const fetchEpisodesOnScroll = async () => {
	await waitForElement(itemsSelector);

	const carouselViewport = document.querySelector(".carousel-viewport");
	let isFetchingNext = false;
	let isFetchingPrevious = false;

	const waitForScrollFinish = () => {
		let scrollTimer;

		return new Promise((resolve) => {
			const scrollHandler = () => {
				clearTimeout(scrollTimer);
				scrollTimer = setTimeout(() => {
					resolve();
					carouselViewport.removeEventListener("scroll", scrollHandler);
				}, 100);
			};

			carouselViewport.addEventListener("scroll", scrollHandler);
		});
	};

	await waitForScrollFinish();

	carouselViewport.addEventListener("scroll", async () => {
		const scrollLeft = carouselViewport.scrollLeft;
		const scrollWidth = carouselViewport.scrollWidth;
		const clientWidth = carouselViewport.clientWidth;
		const offset = 400;

		if (scrollLeft + clientWidth >= scrollWidth - offset && !isFetchingNext) {
			isFetchingNext = true;
			try {
				await fetchNextEpisodes();
			} catch (error) {
				console.error(error);
			}
			isFetchingNext = false;
		}

		if (scrollLeft <= offset && !isFetchingPrevious) {
			isFetchingPrevious = true;
			try {
				await fetchPreviousEpisodes();
			} catch (error) {
				console.error(error);
			}
			isFetchingPrevious = false;
		}
	});
};

const fetchPreviousEpisodes = async () => {
	const items = getItems();
	const firstItemUrl = items[0].firstChild.href;

	const fetchedEpisodes = await fetchEpisodes(firstItemUrl);
	const index = fetchedEpisodes.findIndex(
		(node) => node.firstChild.href === firstItemUrl
	);
	const newEpisodes = fetchedEpisodes.slice(0, index);
	normalizeImages(newEpisodes);

	const itemParent = document.querySelector(itemsSelector).parentElement;
	if (itemParent.firstChild.classList?.contains("item")) {
		itemParent.prepend(...newEpisodes);
	} else {
		itemParent.firstChild.after(...newEpisodes);
	}

	// Adjust the scroll position after prepending the new episodes
	const scrollOffset = newEpisodes.reduce(
		(acc, item) => acc + item.offsetWidth,
		0
	);
	document.querySelector(".carousel-viewport").scrollLeft += scrollOffset;
};

const fetchNextEpisodes = async () => {
	const latestItemUrl = getLatestItemUrl();

	const fetchedEpisodes = await fetchEpisodes(latestItemUrl);
	const index = fetchedEpisodes.findIndex(
		(node) => node.firstChild.href === latestItemUrl
	);
	const newEpisodes = fetchedEpisodes.slice(index + 1);
	normalizeImages(newEpisodes);

	const itemParent = document.querySelector(itemsSelector).parentElement;
	itemParent.append(...newEpisodes);
};

/**
 * Fetches the episodes from the given URL.
 * @param {string} url The URL to fetch the episodes from.
 * @returns {NodeList} The list of episode nodes.
 */
const fetchEpisodes = async (url) => {
	const response = await fetch(url);
	const html = await response.text();

	const parser = new DOMParser();
	const doc = parser.parseFromString(html, "text/html");
	const fetchedEpisodes = doc.querySelectorAll(itemsSelector);

	return Array.from(fetchedEpisodes);
};

/**
 * Normalizes the images of the fetched episodes to be displayed correctly.
 * @param {NodeList} episodeNodes The list of episode nodes.
 */

const normalizeImages = (episodeNodes) => {
	// Iterate over fetchedEpisodes and load images
	episodeNodes.forEach((item) => {
		const image = item.querySelector("img");
		if (!image) {
			return;
		}
		const noscriptParent = item.querySelector("noscript");
		if (!noscriptParent) {
			return;
		}

		// Extract the image URL from the noscript tag
		const imageUrl = noscriptParent?.querySelector("img")?.srcset;

		// Set the image source
		if (imageUrl) {
			image.srcset = imageUrl;
			image.classList = "image-holder";
		}
	});
};

/**
 *
 * @returns {NodeList} The list of episode items.
 */
const getItems = () => {
	const items = document.querySelectorAll(itemsSelector);
	return items;
};

/**
 *
 * @returns {string} The URL of the latest episode.
 */
const getLatestItemUrl = () => {
	const items = getItems();
	const latestItemUrl = items[items.length - 1].firstChild.href;
	return latestItemUrl;
};
