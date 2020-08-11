const puppeteer = require('puppeteer');


try {
    (async () => {
        const browser = await puppeteer.launch({ headless: false});
        // console.info(browser);
        const page = await browser.newPage();

        await page.setViewport({ width: 1280, height: 800 })
        await page.goto('https://app.delphai.com')
        await page.type( '[type=text]', 'jean@delphai.com')
        await page.type('[type=password]', '852r456d!Q')
        await page.click('button')
        await page.waitForSelector('.toolbar-mylist-link')
        await page.screenshot({ path: 'login.png' })

        // search
        await page.type('.d-component-search-input', 'green energy')
        await page.click('.anticon-search')
        await page.waitForSelector('.main-container');
        await page.screenshot({ path: 'searchResult.png' })

        await browser.close()
    })();
} catch(err) {
    console.log(err)
}
