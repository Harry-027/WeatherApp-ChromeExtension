chrome.browserAction.onClicked.addListener(function(activeTab){
  var newURL = "WeatherApp/index.html";
  chrome.tabs.create({ url: newURL });
});