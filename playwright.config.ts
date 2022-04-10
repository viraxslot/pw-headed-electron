import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
    timeout: 30000,
    globalTimeout: 5000,
    reporter: 'list',
    testDir: './test/electron',
    use: {
        headless: false,
    },
};
export default config;
