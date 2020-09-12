const puppeteer = require('puppeteer');

const timeout = 20000;
let browser;
let page;

describe('Test title and header of the homepage', () => {
  beforeAll(async () => {
    browser = await puppeteer.launch({
      headless: false,
      devtools: true,
    });
    page = await browser.newPage();

    page.emulate({
      viewport: {
        width: 500,
        height: 2400,
      },
      userAgent: '',
    });

    await page.goto('http://localhost:3000/');
  });
  it(
    'should have title Auto-Suggest News',
    async () => {
      const title = await page.title();

      expect(title).toBe('Auto-Suggest News');
    },
    timeout
  );

  it(
    'should render an input and a button',
    async () => {
      const input = await page.$('input');
      const button = await page.$('button');
      expect(input).not.toBeNull();
      expect(button).not.toBeNull();
    },
    timeout
  );

  it(
    'should render a div with the results when input changes',
    async () => {
      await _testInputFunctionality(false);
    },
    timeout
  );

  it(
    'should render a div with the results when button is clicked',
    async () => {
      await _testInputFunctionality(true);
    },
    timeout
  );

  afterAll(() => {
    browser.close();
  });
});

async function _testInputFunctionality(pressButton) {
  if (pressButton) {
    await page.$eval('input', el => el.value = 'javascript');
    await page.click('button');
  } else {
    await page.type('input', 'javascript');
  }
  await page.waitForSelector('#results');
  const results = await page.evaluate(() => {
    return document.querySelector('#results').innerHTML;
  });
  expect(results).not.toBeNull();
  await page.$eval('input', el => el.value = '');
}
