# README

Get just the recipe (and none of the lengthy life story) from a recipe website. Once installed, simply click the extension icon (a cute little whisk) and it'll open the current page in https://www.justtherecipe.app.
Credit for https://www.justtherecipe.app goes to Reddit user [u/doppio](https://www.reddit.com/user/doppio/). This extension just opens the current page on https://www.justtherecipe.app.

Icons made by [Freepik](https://www.freepik.com) from [www.flaticon.com](https://www.flaticon.com/).

I'm not affiliated with the creator of https://www.justtherecipe.app, just wanted an easy way to access the excellent website.


## To install
### From Chrome Web Store
https://chrome.google.com/webstore/detail/take-me-to-just-the-recip/deohhololgmgabindpalajcieahnknde

### From GitHub
1. Download `takemetojusttherecipe.zip` from https://github.com/ShivanKaul/TakeMeToJustTheRecipe/releases/latest. Direct link: https://github.com/ShivanKaul/TakeMeToJustTheRecipe/releases/download/v0.1/takemetojusttherecipe.zip
2. Extract extension.
3. [Follow the instructions to load into Chrome.](https://www.smashingmagazine.com/2017/04/browser-extension-edge-chrome-firefox-opera-brave-vivaldi/#google-chrome-opera-vivaldi)

## Develop
```bash
git clone https://github.com/ShivanKaul/TakeMeToJustTheRecipe.git
cd TakeMeToJustTheRecipe
npm install # to install browserify.
npm run build # to build the extension. 
npm run pkg # to create a .zip
```

Totally didn't need `browserify` for this, just have a template lying around.
