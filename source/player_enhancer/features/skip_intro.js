import { listenToStyleChanges, waitForElement } from "../../dom_utils";
import {
	cuePointSelector,
	getProgressElement,
	getVideoElement,
	progressSelector,
} from "../selectors";

export const skipIntro = async () => {
	const buttonId = "skip-intro-button";
	const getButtonElement = () => document.getElementById(buttonId);

	await waitForElement(progressSelector);
	await waitForElement(cuePointSelector);

	const firstCuePoint = document.querySelector(cuePointSelector);
	const cuePointOffset = Number.parseFloat(firstCuePoint.style?.left);

	let skipBasedOnCuePoint = cuePointOffset < 5;
	const fallbackIntroDuration = 32;

	const addButton = () => {
		if (getButtonElement()) {
			return;
		}

		let button = document.createElement("button");
		button.id = buttonId;
		button.innerHTML = "Skip Intro";
		button.style.position = "absolute";
		button.style.color = "white";
		button.style.backgroundColor = "#00000070";
		button.style.borderRadius = "10px";
		button.style.padding = "12px 24px";
		button.style.zIndex = "1000";
		button.style.bottom = "80px";
		button.style.right = "15px";
		button.style.fontSize = "larger";

		button.addEventListener("click", () => {
			const video = getVideoElement();
			if (skipBasedOnCuePoint) {
				video.currentTime = video.duration;
			} else {
				video.currentTime = fallbackIntroDuration;
			}
		});

		getVideoElement()?.parentElement?.appendChild(button);
	};

	const removeButton = () => {
		let button = getButtonElement();
		if (button) {
			button.remove();
		}
	};

	listenToStyleChanges(progressSelector, () => {
		const progressWidth = getProgressElement().style?.width;
		console.log(`new progressWidth: ${progressWidth}`);
		if (!progressWidth) {
			return;
		}

		const progress = Number.parseFloat(progressWidth);
		if (skipBasedOnCuePoint) {
			if (progress < cuePointOffset) {
				addButton();
			} else {
				removeButton();
			}
		} else {
			const video = getVideoElement();
			const currentPosition = video.currentTime;

			if (progress < 5 && currentPosition < fallbackIntroDuration) {
				addButton();
			} else {
				removeButton();
			}
		}
	});
};
