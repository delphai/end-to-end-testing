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
        await page.type('[type=text]', 'green engergy')
        const resultPage = await page.waitForSelector('.default-toolbar')
        expect(resultPage).toBeTruthy
    }, timeout)

    test('should open filters', async () => {
        
    })
})

