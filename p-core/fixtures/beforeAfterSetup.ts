import { Browser, BrowserContext, chromium, Page } from 'playwright';
import { test as base } from '@playwright/test';


type TestFixtures = {
    browser: Browser;
    context: BrowserContext;
    page: Page;
};

// Create a new test with beforeEach and afterEach settings
export const test = base.extend<TestFixtures>({

    // Setting up browser
    browser: async ({}, use: (browser: Browser) => Promise<void>) => {
        const browser = await chromium.launch({ headless: true });
        await use(browser);
        await browser.close();
        // console.log('browser closed');
    },
    
    // Setting up context (creates a new browser session for each test)
    context: async ({ browser }, use) => {
        const context = await browser.newContext();
        await use(context);
        await context.close();
        // console.log('context closed');
    },
    
    // Initializing the page
    page: async ({ context }, use) => {
        const page = await context.newPage();
        await use(page);
        await page.close();
        // console.log('page closed');
    }
});
