let timeout = process.env.SLOWMO ? 30000 : 10000

describe("test Google search functionality", () => {
  beforeAll(async () => {
    await page.goto('https://google.com')
  });

  test("title should be 'Google'", async () => {
    await expect(page.title()).resolves.toMatch('Google')
  }, timeout)

  test("should search 'delphai'", async () => {
    await page.type('.gLFyf', 'delphai')
    await page.waitForXPath('//input[@class="gNO89b"]')
    const element = await page.$x('(//input[@class="gNO89b"])')
    await element[1].click()
    await page.waitForNavigation()
    await expect(page.title()).resolves.toContain('delphai'|| 'Delphai');
  }, timeout);

  test("should click the first link", async () => {
    await page.click('.LC20lb')
    const firstLink = await page.waitForNavigation()
    await expect(firstLink).toBeTruthy()
  }, timeout)
});

