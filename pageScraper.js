const scraperObject = {
    url: 'https://www.aliexpress.com/category/1511/watches.html?spm=a2g0o.home.106.2.650c2145KeCfWT&isCates=y',
    async scraper(browser){
        let page = await browser.newPage();
        console.log(`Navigating to ${this.url}...`);
        await page.goto(this.url);
        // Wait for the required DOM to be rendered
        await page.waitForSelector('.product-container');
        let urls = await page.$$eval('.JIIxO > ._1OUGS', links => {
            // Extract the links from the data
            links = links.map(el => el.querySelector('._1OUGS > ._9tla3').href)
            return links;
        });
        console.log(urls);
    }
}

module.exports = scraperObject;