for (const link of document.getElementsByTagName('a')) {
    if (link.href.includes('wowhead')) {
        const url = new URL(link.href);
        url.hostname = url.hostname.replace(/wowhead\.com$/, 'wotlkdb.com')
        link.href = url.toString();
    }
}
