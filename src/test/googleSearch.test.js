const timeout = process.env.SLOWMO ? 30000 : 10000;

// beforeAll(async () => {
//   await page.goto('https://google.com');
// });
describe('Test Google search functionality', () => {
  beforeAll(async () => {
    await page.goto('https://google.com')
  });

  test('Title should be "Google"', async () => {
    await expect(page.title()).resolves.toMatch('Google')
  })

  test('should search', async () => {
    await page.type('.gLFyf', 'delphai')
    await page.evaluate(xpath => {
      let xpathResult = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
      let node = xpathResult.singleNodeValue;
      node.click()
    }, '(//input[@class="gNO89b"])[2]')
    
    await page.waitForNavigation()
    await expect(page.title()).resolves.toMatch('delphai - Google Suche');
  }, timeout);
});

