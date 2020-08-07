const puppeteer = require('puppeteer');

// open a browser and direct the page to google 
// use headless and slowMo for easier debugging
(async () => {
    const browser = await puppeteer.launch({ headless: false, slowMo: 500 });
    // console.info(browser);
    const page = await browser.newPage();
    await page.goto('https://www.google.com');
    await browser.close();
})();