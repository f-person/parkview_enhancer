import { waitForElement } from "../../shared/dom_utils";

/**
 * Makes the "FULL EPISODES" header a link to the season selection page.
 */
export const clickableEpisodesHeader = async () => {
	const headerSelector = ".section-header";
	const headerElement = await waitForElement(headerSelector);

	const originalContent = headerElement.innerHTML;
	headerElement.innerHTML = `
    <style>
        .section-header:hover a {
            color: var(--color-brand-01) !important;
			transition: color 0.3s ease-in-out;
        }
    </style>
    <a href="https://www.southparkstudios.com/seasons/south-park" class="section-header" style="text-decoration: none; color: inherit">${originalContent}</a>
`;
};
