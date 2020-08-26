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
        expect(searchResult).toBeTruthy
    }, timeout)

    test('should open filters', async () => {
        await page.click('[type=button]')
        const searchDropdown = await page.waitForSelector('.filters')
        expect(searchDropdown).toBeTruthy
    }, timeout)

    test('should open dropdown', async () => {
        await page.waitForXPath('//span[@class="ant-select-selection-placeholder"]')
        const elements = await page.$x('//span[@class="ant-select-selection-placeholder"]')
        await elements[0].click()
        const dropdown = await page.waitForXPath('//div[@class="filter-dropdown-option filter-search-bar"]')
        expect(dropdown).toBeTruthy
    }, timeout)

    test('should search in the dropdown', async () => {
        const search = await page.$x('//input[@class="ant-input"]')
        // console.log(search)
        await search[0].type('asia')
        const searchResult = await page.waitForXPath('//span[@class="ant-select-tree-node-content-wrapper ant-select-tree-node-content-wrapper-close"]')
        await page.screenshot({ path: 'dropdownSearchResult.png' })
        expect(searchResult).toBeTruthy
    }, timeout)

    test('should click on a checkbox', async () => {
        const checkbox = await page.$x('//span[@class="ant-select-tree-checkbox-inner"]')
        await checkbox[0].click()
        const clicked = await page.waitForXPath('//button[@class="ant-btn text-font-style rounded-corners-btn applied-filter-btn ant-btn-default"]')
        await page.screenshot({ path: '2.png' })
        expect(clicked).toBeTruthy
    }, timeout)

    test('should save a search result', async () => {
        const saveSearchBtn = await page.$x('//button[@class="ant-btn d-component-button ant-btn-default"]')
        await saveSearchBtn[0].click()
        const msg = await page.waitForXPath('//div[@class="ant-message-notice-content"]')
        expect(msg).toBeTruthy
    }, timeout)
})

