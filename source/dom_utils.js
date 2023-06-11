// Returns a callback to close the listener.
export const listenToChildChanges = (element, callback) => {
	const observer = new MutationObserver((_) => {
		callback();
	});
	observer.observe(element, { subtree: true, childList: true });
	return observer.disconnect;
};

export const createDiv = () => document.createElement("div");
