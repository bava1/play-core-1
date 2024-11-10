import { expect } from '@playwright/test';
import { goToUrl } from '../navigation/go-to-url';
import { NavigationComponent } from '../objects/navigation-com';
import { test } from '../fixtures/beforeAfterSetup';


test.describe('New Todo Test 1', () => {
    test('play core navigation', async ({ page }) => {
        // Create 3 items.
        await goToUrl(page, 'https://playwright.dev', { waitUntil: 'domcontentloaded' });
        expect(await page.title()).toBe('Fast and reliable end-to-end testing for modern web apps | Playwright');
    });

    test('play core navigation 2', async ({ page }) => {
        const nav = new NavigationComponent(page);
        await nav.goTo('https://playwright.dev', 'networkidle');
        await nav.refresh();
        await nav.goBack();
    });
    
});


