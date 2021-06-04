const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
      headless: false
  });
  const page = await browser.newPage();
  await page.goto('https://selfregistration.cowin.gov.in/');
  await page.waitForSelector("#mat-input-0")
  await page.type("#mat-input-0", "9746106074")
  await page.waitForTimeout(2000)
  
  const [button] = await page.$x("//ion-button[contains(., 'Get OTP')]");
    if (button) {
        await button.click();
    }

    await page.waitForFunction(() => {
        const nextPage = document.querySelector(".appointment-txt");
        if (nextPage) return true;

        return false;
    })

  const schedule = await page.$x("//span[contains(., 'Schedule')]");
  if (schedule) {
      schedule.map(button => button.click())
  }



//   await browser.close();
})();