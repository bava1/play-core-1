import { Page } from 'playwright';

// Universal beforeEach for navigation or preparation
export async function setupBeforeEach(page: Page, url: string) {
    await page.goto(url, { waitUntil: 'domcontentloaded' });
}

// Generic afterEach for cleaning up or waiting for requests to complete
export async function setupAfterEach(page: Page) {
    await page.waitForLoadState('networkidle');
}