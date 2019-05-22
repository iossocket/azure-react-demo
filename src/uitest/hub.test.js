import webdriver from 'selenium-webdriver';

jest.setTimeout(30000);
let By = webdriver.By;

xdescribe('hub', () => {
    let driver;

    beforeEach(async () => {
        driver = new webdriver.Builder()
            .withCapabilities(webdriver.Capabilities.chrome())
            .usingServer('http://localhost:4444/wd/hub')
            .build();
        await driver.get('mynginx:8888/');
    });

    afterEach(async () => {
        await driver.quit();
    });

    it('should run', async () => {
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
