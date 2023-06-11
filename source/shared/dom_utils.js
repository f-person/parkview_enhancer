/**
 * @param {String} selector
 * @returns {Promise<HTMLElement>} element
 */
export const waitForElement = (selector) => {
	return new Promise((resolve) => {
		if (document.querySelector(selector)) {
			return resolve(document.querySelector(selector));
		}

		const observer = new MutationObserver((mutations) => {
			if (document.querySelector(selector)) {
				resolve(document.querySelector(selector));
				observer.disconnect();
			}
		});

		observer.observe(document.body, {
			childList: true,
			subtree: true,
		});
	});
};

/**
 * @param {String} selector
 * @param {Function} callback
 * @returns {Function} disconnect
 */
export const listenToStyleChanges = (selector, callback) => {
	const observer = new MutationObserver((_) => {
		callback();
	});
	observer.observe(document.querySelector(selector), {
		attributesList: ["style"],
		attributeOldValue: true,
	});
	return observer.disconnect;
};

export const createDiv = () => document.createElement("div");
