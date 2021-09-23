const scraperObject = {
    url: 'https://www.aliexpress.com/category/1511/watches.html?spm=a2g0o.home.106.2.650c2145KeCfWT&isCates=y',
    async scraper(browser){
        let page = await browser.newPage();
        console.log(`Navigating to ${this.url}...`);
        await page.goto(this.url);
        // Wait for the required DOM to be rendered
        await page.waitForSelector('.product-container');
        // Get the link to all the required books
        let urls = await page.$$eval('.JIIxO > ._1OUGS', links => {
            // Make sure the book to be scraped is in stock
            //links = links.filter(link => link.querySelector('.instock.availability > i').textContent !== "In stock")
            // Extract the links from the data
            links = links.map(el => el.querySelector('._1OUGS > ._9tla3').href)
            return links;
        });
        console.log(urls);
    }
}

module.exports = scraperObject;