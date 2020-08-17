const timeout = process.env.SLOWMO ? 30000 : 10000;

describe('Google', () => {
  beforeAll(async () => {
    await page.goto('https://google.com');
  });

  test('should search', async () => {
    await page.type('.gLFyf', 'cute dogs')
    await page.click('input.RNmpXc')
    await page.waitForNavigation()
  }, timeout);
});