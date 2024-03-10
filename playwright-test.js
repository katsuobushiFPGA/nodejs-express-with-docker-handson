const { chromium, devices } = require('playwright');

(async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage({
        ...devices['iPhone 11 Pro']
    });

    await page.goto('https://m.yahoo.co.jp');
    await page.screenshot({path: './screenshot.png', fullPage: true});
    await browser.close();
})()