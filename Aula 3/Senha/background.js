chrome.runtime.onInstalled.addListener(function() {
    chrome.tabs.create({ url: "password.html" });
  });
  