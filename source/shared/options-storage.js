import OptionsSync from "webext-options-sync";

export default new OptionsSync({
	defaults: {
		// The amount of time in seconds to seek forward/backward when using the
		// arrow keys.
		seekTime: 5,
	},
	migrations: [OptionsSync.migrations.removeUnused],
	logging: true,
});
