const JUST_THE_RECIPE_PREFIX_URL = "https://www.justtherecipe.app/recipe?url="

chrome.browserAction.onClicked.addListener((tab) => {
  const destinationUrl = JUST_THE_RECIPE_PREFIX_URL + tab.url;
  chrome.tabs.create({url: destinationUrl});
});
