export const timeout = process.env.SLOWMO ? 30000 : 10000

describe('test delphai search', () => {
    beforeAll(async () => {
        await page.goto('https://app.delphai.com/')
    })

    test('should login', async () => {
        await page.goto('https://app.delphai.com')
        await page.type( '[type=text]', 'delphai_test@delphai.com')
        await page.type('[type=password]', 'delphai123!')
        await page.click('button')
        const selector = await page.waitForSelector('.toolbar-mylist-link')
        expect(selector).toBeTruthy()
    }, timeout)

    test('should search', async () => {
        await page.type('[type=text]', 'green house')
        await page.click('.d-component-search-icon')
        const searchResult = await page.waitForSelector('.main-container');
        // const ss = await page.screenshot({ path: 'searchResult.png' })
        expect(searchResult).toBeTruthy
    }, timeout)

    // test('should open filters', async () => {
    //     // await page.waitForXPath('//button[@class="ant-btn toolbar-filter-btn text-font-style ant-btn-primary"]')
    //     // const element = await page.$x('//button[@class="ant-btn toolbar-filter-btn text-font-style ant-btn-primary"]')
    //     // const element = await page.$x('//button[@type="button"]')
    //     // console.log(element)
    //     // await element[1].click()
    //     await page.click('[type=button]')
    //     const searchDropdown = await page.waitForSelector('.filters')
    //     expect(searchDropdown).toBeTruthy
    // }, timeout)
})

