import { waitForAttributeValue, waitForElement } from "../../shared/dom_utils";

export const focusCurrentSeasonOnDropdownTap = async () => {
	const dropdownButtonSelector = '[data-testid="Dropdown"] button';
	const dropdownList = document.querySelector('[data-testid="DropdownList"]');

	const dropdownButton = await waitForElement(dropdownButtonSelector);

	dropdownButton.addEventListener("click", async () => {
		const isDropdownOpen =
			dropdownButton.getAttribute("aria-expanded") === "true";
		console.log("isDropdownOpen", isDropdownOpen);
		if (isDropdownOpen) return;

		await waitForAttributeValue(
			dropdownButtonSelector,
			"aria-expanded",
			"true"
		);

		const allSeasons = Array.from(dropdownList.querySelectorAll("li"));
		console.log(
			"allSeasons[0].getBoundingClientRect()",
			allSeasons[0].getBoundingClientRect()
		);
		console.log(
			"allSeasons[1].getBoundingClientRect()",
			allSeasons[1].getBoundingClientRect()
		);
		const selectedSeasonIndex = allSeasons.findIndex((season) => {
			return season.getAttribute("aria-selected") === "true";
		});

		console.log("selectedSeasonIndex", selectedSeasonIndex);
		if (selectedSeasonIndex !== -1) {
			const listItemHeight = allSeasons[0].getBoundingClientRect().height;
			dropdownList.scrollTop = selectedSeasonIndex * listItemHeight;
		}
	});
};
