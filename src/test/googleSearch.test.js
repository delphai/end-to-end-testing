const timeout = process.env.SLOWMO ? 30000 : 10000;

describe('test Google search functionality', () => {
  beforeAll(async () => {
    await page.goto('https://google.com')
  });

  test('title should be "Google"', async () => {
    await expect(page.title()).resolves.toMatch('Google')
  }, timeout)

  test('should search', async () => {
    await page.type('.gLFyf', 'delphai')
    await page.evaluate(xpath => {
      let xpathResult = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
      let node = xpathResult.singleNodeValue;
      node.click()
    }, '(//input[@class="gNO89b"])[2]')
    
    await page.waitForNavigation()
    await expect(page.title()).resolves.toContain('delphai');
  }, timeout);

  test('should click on the first link', async () => {
    await page.click('.LC20lb')
    await page.waitForNavigation()
    await expect(page.title()).resolves.toContain('delphai');
  }, timeout)
});

