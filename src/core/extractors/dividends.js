const puppeter = require('puppeteer');
const url = require('../common/urls');
const selectors = require('../common/selectors');
const diplomat = require('../../diplomat/dividends');

async function extractDividends(cpf, password) {
    let retry = 0;
    while (retry <= 5) {
        try {
            const browser = await puppeter.launch({ headless: true });
            const page = await browser.newPage();

            await page.goto(url.LOGIN_PAGE, { waitUntil: 'networkidle2' });

            await page.type(selectors.LOGIN_FORM, `${cpf}`);

            await page.type(selectors.PASSWORD_FORM, `${password}`);

            await page.tap(selectors.LOGIN_BUTTON);

            await page.waitFor(60000);

            await page.goto(url.CONSULTA_DIVIDENDS, { waitUntil: 'networkidle2' });

            await page.tap(selectors.DIVIDENDS_BUTTON);

            await page.waitFor(5000);

            const rawAssets = await page.evaluate(() => {
                let table = document.querySelectorAll('tr');
                let assets = Array.from(table).map((item) => item.innerText);
                return assets;
            });

            await browser.close();

            return diplomat.parseDividends(rawAssets);
        } catch (exception) {
            if (retry < 5) {
                console.log(`Attemp # ${retry}`);
                console.log('Process Restarted - Retrying...');
                console.log(exception.message);
                retry += 1;
            } else {
                return {
                    process: 'CEI - Dividends Extraction',
                    status: 'Failure',
                    exception: exception.message
                };
            }
        }
    }
}


module.exports.extractDividends = extractDividends;