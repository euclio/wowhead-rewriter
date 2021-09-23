import browser from 'webextension-polyfill';

browser.webRequest.onBeforeRequest.addListener(
    function(_details) {
        return { redirectUrl: 'https://wotlkdb.com/static/widgets/power.js' };
    },
    { urls: ['*://*.wowhead.com/widgets/power.js'] },
    ["blocking"],
);

