# South Park Enhancer
A browser extension that adds useful features for enjoying South Park on the official website

## Install

[link-chrome]: https://chrome.google.com/webstore/detail/south-park-enhancer/maaedhmkhgeojhcgohfgejelmbkfcppa 'Version published on Chrome Web Store'
[link-firefox]: https://addons.mozilla.org/firefox/addon/south-park-enhancer/ 'Version published on Mozilla Add-ons'

[<img src="https://raw.githubusercontent.com/alrra/browser-logos/90fdf03c/src/chrome/chrome.svg" width="48" alt="Chrome" valign="middle">][link-chrome] [<img valign="middle" src="https://img.shields.io/chrome-web-store/v/maaedhmkhgeojhcgohfgejelmbkfcppa.svg?label=%20">][link-chrome] and other Chromium browsers

[<img src="https://raw.githubusercontent.com/alrra/browser-logos/90fdf03c/src/firefox/firefox.svg" width="48" alt="Firefox" valign="middle">][link-firefox] [<img valign="middle" src="https://img.shields.io/amo/v/south-park-enhancer.svg?label=%20">][link-firefox] including Firefox Android


## Features
1. **Scrollable Episode Navigation:** Fetches and displays next and previous episodes below the video player as you scroll, providing seamless access to adjacent episodes.
2. **Skip Intro Button:** Adds a convenient "Skip Intro" button for skipping the introductory portion of episodes, saving time and enhancing the viewing experience.
3. **Enhanced Random Episode Selection:** Improves the randomness of episode selection, ensuring a truly unpredictable and diverse viewing experience.
4. **Auto Cursor Hide:** Automatically hides the cursor after a few seconds of inactivity on the video player, reducing distractions and maximizing the focus on the content.
5. **Click-to-Play/Pause:** Allows effortless play/pause control by clicking directly on the video player, enhancing usability and convenience.
6. **Spacebar Play/Pause:** Ensures consistent play/pause functionality by capturing the spacebar key press, even when the video is not in focus, preventing accidental page scrolling.
7. **Configurable Seeking Time:** Provides flexibility by allowing users to customize the seeking time, with a default setting of 5 seconds, for precise video navigation.
8. **Double-Click Fullscreen:** Enables fullscreen mode with a simple double-click gesture, providing an intuitive and immersive viewing experience.
9. **Improved Episode List Scrollability:** Enhances the usability of the episodes' list under the "Watching" section by making it scrollable, facilitating easier browsing of available episodes.
10. **Focused Season Selection:** Automatically focuses on the currently selected season when opening the season selection dropdown, streamlining episode navigation within a specific season.
11. **Homepage Link Enhancement:** Enhances user convenience by making the "FULL EPISODES" header on the homepage clickable, directly linking to the full episodes page for easy access to all available content.

#### Planned Features
* Keep track of watched episodes
* Manually mark an episode as watched or unwatched
* If possible, force the HLS player to use the highest quality video stream
* Make the "FULL EPISODES" text on the homepage clickable
* Add a better season selection view to the left side of "full episodes"/season pages
* A dark mode? (maybe)

---

## Acknowledgements
* [South Park](https://www.southparkstudios.com) for being so awesome and providing a free
  way for everyone to enjoy the show
* [fregante/browser-extension-template](https://github.com/fregante/browser-extension-template)
  for the template used to create this extension
* D952 for the [extension icon](https://commons.wikimedia.org/wiki/File:Stan_Marsh.svg),
  licensed under CC0 1.0.

---

When building for Firefox, change the following in `manifest.json`:
```json
{
	"manifest_version": 2,
	"background": {
		"scripts": ["background.js"],
		"persistent": false
	}
}
```