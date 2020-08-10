const puppeteer = require('puppeteer');

// open a browser and direct the page to google 
// use headless and slowMo for easier debugging

const screenshot = 'amazon_nyan_cat_pullover.png';
try {
    (async () => {
        const browser = await puppeteer.launch({ headless: false});
        // console.info(browser);
        const page = await browser.newPage();
    
        await page.setViewport({ width: 1280, height: 800 })
        await page.goto('https://www.google.com')
        await page.type('.gLFyf', 'cute dogs')
        await page.click('input.RNmpXc')
        await page.waitForNavigation()
        await page.screenshot({ path: 'result.png' })
        await browser.close()
    })();
} catch (err) {
    console.log(err)
}
