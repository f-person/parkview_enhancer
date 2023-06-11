# South Park Enhancer
A browser extension that adds useful features for enjoying South Park on the official website

## Features
* Adds a "Skip Intro" button
* Automatically hides the cursor after a few seconds of inactivity on the video player
* Toggle play/pause on click on the video player
* Always play/pause the video when the spacebar is pressed (instead of scrolling
  the page if the video is not focused)
* Configurable seeking time (defaults to 5 seconds)
* Toggle fullscreen on double-click

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

The extension isn't yet available on any stores but it's under review and will be
available soon. In the meantime, you can install it manually.

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