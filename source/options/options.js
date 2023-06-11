// eslint-disable-next-line import/no-unassigned-import
import "webext-base-css";
import optionsStorage from "../shared/options-storage";

async function init() {
	await optionsStorage.syncForm("#options-form");
}

init();
