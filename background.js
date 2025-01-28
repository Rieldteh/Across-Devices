document.addEventListener('DOMContentLoaded', () => {
    chrome.runtime.sendMessage({ action: "execute_script" });
});

chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
      target: { tabId: tab.id, allFrames: true },
      world: "MAIN",
      files: ["popup.js"],
    });
});