# South Park Enhancer
A browser extension that adds useful features for enjoying South Park on the official website

## Install

[link-chrome]: https://chrome.google.com/webstore/detail/south-park-enhancer/maaedhmkhgeojhcgohfgejelmbkfcppa 'Version published on Chrome Web Store'
[link-firefox]: https://addons.mozilla.org/firefox/addon/south-park-enhancer/ 'Version published on Mozilla Add-ons'
[link-safari]: https://apps.apple.com/app/id1519867270 'Version published on the Mac App Store'

[<img src="https://raw.githubusercontent.com/alrra/browser-logos/90fdf03c/src/chrome/chrome.svg" width="48" alt="Chrome" valign="middle">][link-chrome] [<img valign="middle" src="https://img.shields.io/chrome-web-store/v/maaedhmkhgeojhcgohfgejelmbkfcppa.svg?label=%20">][link-chrome] and other Chromium browsers

[<img src="https://raw.githubusercontent.com/alrra/browser-logos/90fdf03c/src/firefox/firefox.svg" width="48" alt="Firefox" valign="middle">][link-firefox] [<img valign="middle" src="https://img.shields.io/amo/v/south-park-enhancer.svg?label=%20">][link-firefox] including Firefox Android


## Features
* Adds a "Skip Intro" button
* Automatically hides the cursor after a few seconds of inactivity on the video player
* Toggle play/pause on click on the video player
* Always play/pause the video when the spacebar is pressed (instead of scrolling
  the page if the video is not focused)
* Configurable seeking time (defaults to 5 seconds)
* Toggle fullscreen on double-click
* Makes episodes' list under "Watching" scrollable

#### Planned Features
* Keep track of watched episodes
* Manually mark an episode as watched or unwatched
* "True Random" (currently, the "Random" button randomly selects an episode from 
  a pre-defined list of episodes that gets occasionally updated)
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