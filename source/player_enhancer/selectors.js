export const progressSelector = ".edge-gui-progress-bar-progress";
export const cuePointSelector = ".edge-gui-progress-bar-cuepoint";
export const playerVideoSelector = ".player_video";
export const edgeGuiSelector = ".edge-gui";

export const getProgressElement = () =>
	document.querySelector(progressSelector);
export const getVideoElement = () => document.querySelector("video");
export const getPlayerVideoElement = () =>
	document.querySelector(playerVideoSelector);
export const getGuiElement = () => document.querySelector(edgeGuiSelector);
