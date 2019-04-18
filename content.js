/**
* Made by Connor Wright (Connorwrightkappa#1337) under Volvox.
*/

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  var referrer = getUrlParameter("referrer");
  console.log(referrer);

  if (referrer === undefined) {
    console.log("We are not here from a raid.");
    return;
  } else {
    console.log("We are here from a raid.");
    setTimeout(function() {
      var url = window.location.href;
      var channelName = url.split("/")[3].split("?")[0]; // twitch.tv/connorwrightkappa?referrer=raid

      window.location.href = "https://twitch.tv/" + channelName;
    }, 10000);
  }

});

/**
* This will get the value of a URl parameter
*/
function getUrlParameter(name) {
  var pageURL = window.location.search.substring(1),
  urlVariables = pageURL.split("&"),
  paramName,
  i;

  for (i = 0; i < urlVariables.length; i++) {
    paramName = urlVariables[i].split('=');

    if (paramName[0] === name) {
      return paramName[1] === undefined ? true : decodeURIComponent(paramName[1]);
    }
  }

}
