var online = true;
chrome.webRequest.onBeforeRequest.addListener(
	function (details) {
		return {
			cancel: online
		};
	},
	{
		urls: ["*://*.instagram.com/api/v1/direct_v2/threads/*/items/*/seen/"]
	},
	["blocking"]
);

chrome.browserAction.onClicked.addListener(function () {
	online = !online;
	var path = 'icons/icon48' + (online ? '' : '-b') + '.png';
	chrome.browserAction.setIcon({ path: path });
});