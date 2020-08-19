export {}
let timeout = process.env.SLOWMO ? 30000 : 10000

describe('test delphai login functionality', () => {
    beforeAll(async () => {
        await page.goto('https://app.delphai.com/')
    })

    test('title should be "delphai"', async () => {
        await expect(page.title()).resolves.toMatch('delphai')
    }, timeout)

    test('should login', async () => {
        await page.goto('https://app.delphai.com')
        await page.type( '[type=text]', 'delphai_test@delphai.com')
        await page.type('[type=password]', 'delphai123!')
        await page.click('button')
        const selector = await page.waitForSelector('.toolbar-mylist-link')
        expect(selector).toBeTruthy()
    }, timeout)
})