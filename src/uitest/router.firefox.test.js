import * as chrome from 'chromedriver';
import webdriver from 'selenium-webdriver';

jest.setTimeout(30000);
let By = webdriver.By;

describe('router', () => {
    let driver;
    beforeEach(() => {
        driver = new webdriver.Builder().forBrowser('firefox').build();
        driver.get('http://localhost:3000/');
    });

    afterEach(() => {
        driver.close();
    });

    it('should open home page', async () => {
        let element1 = await driver.findElement(By.id('title1'));
        let title1 = await element1.getText();
        let element2 = await driver.findElement(By.id('title2'));
        let title2 = await element2.getText();
        expect(title1).toBe('Argentina (PAGE 1)');
        expect(title2).toBe('Nigeria (PAGE 2)');
    });

    it('should navigate to page1', async () => {
        await driver.findElement(By.id('link')).click();
        let element = await driver.findElement(By.id('nigeria'));
        let title = await element.getText();
        expect(title).toBe('NIGERIA');
    });
});

