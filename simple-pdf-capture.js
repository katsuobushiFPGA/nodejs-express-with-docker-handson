const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  // ウェブページを開く
  await page.goto('https://www.google.com');

  // PDF を保存する
  await page.pdf({ path: 'google.pdf' });

  await browser.close();
})();