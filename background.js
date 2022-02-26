/**
 * Remmove the paywall depending on the site you are on
 */
function removePaywall() {
  const hostname = window.location.hostname;
  if (hostname.includes("nytimes")) {
    const mainDiv = document.querySelectorAll('div[class^="css-"]')[0];
    mainDiv.style.position = "relative";
    mainDiv.style.overflow = "visible";
    mainDiv.children[mainDiv.children.length - 1].style.background =
      "transparent";
    document.getElementById("gateway-content").remove();
  }
}

// Should only be called when clicked on because intention is important
chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: removePaywall,
  });
});
