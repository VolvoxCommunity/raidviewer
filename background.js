/**
* This is a script which runs in the background to listen for tab change events
*/

chrome.tabs.onUpdated.addListener(function (tabID, changeInfo, tab) {
  var string = "Tab ID: " + tabID + ", changeInfo: " + changeInfo + ", Tab: " + tab;
  chrome.tabs.sendMessage(tabID, {
    message: string,
    url: changeInfo.url
  });
});
