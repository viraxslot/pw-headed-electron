import { ElectronApplication, _electron as electron } from 'playwright';
import { test, expect } from '@playwright/test';

test.describe('main suite', function () {
    let electronApp: ElectronApplication;

    test.beforeEach(async () => {
        electronApp = await electron.launch({
            args: ['src/main.js'],
        });
    });

    test('check header title', async () => {
        const window = await electronApp.firstWindow();

        await window.waitForSelector('data-test-id=main-header');
        const header = window.locator('data-test-id=main-header');
        await expect(header).toHaveText('Hello World!');
    });

    test.afterEach(async () => {
        await electronApp.close();
    });
});
