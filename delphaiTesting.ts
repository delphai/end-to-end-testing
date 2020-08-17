const puppeteer = require('puppeteer');


try {
    (async () => {
        const browser = await puppeteer.launch({ headless: false});
        const page = await browser.newPage();

        // login
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

        // open fliter 
        await page.click('[type=button]')
        await page.waitForSelector('.filters-container')

        
        // slider
        // const e = await page.$('[role=slider]')
        // const box = await e.boundingBox();
        
        // await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
        // await page.mouse.down("right");
        // await page.mouse.move(0, 100); // move to (100, 200) coordinates
        // await page.mouse.up();

        // Drags the mouse from a point
        // await page.mouse.move(0, 0);
        // await page.mouse.down();
        
        // // Drops the mouse to another point
        // await page.mouse.move(100, 100);
        // await page.mouse.up();


        await page.screenshot({ path: 'save.png' })

        await browser.close()
    })();
} catch(err) {
    console.log(err)
}
