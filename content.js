/**
* Made by Connor Wright (Connorwrightkappa#1337) under Volvox.
*/


/**
* This will get the current URl of the page (only on twitch.tv/*) and detect whether the user is coming from a raid or not and then set a timer to redirect the user to the URL without the referrer tag
* to get the streamer the extra view.
**/
function inject() {
  var referrer = getUrlParameter("referrer");
  debugLog("Referrer: " + referrer);

  if (referrer !== undefined) {
    // we have come to this channel from a raid
    console.log("We are here from a raid. Redirecting in 10 seconds.");
    setTimeout(function() {
      var url = window.location.href;
      var channelName = url.split("/")[3].split("?")[0]; // twitch.tv/connorwrightkappa?referrer=raid

      window.location.href = "https://twitch.tv/" + channelName;
    }, 10000);

  } else {
    // we have not come here from a raid
    console.log("We are not here from a raid.");
  }

}

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

inject();
