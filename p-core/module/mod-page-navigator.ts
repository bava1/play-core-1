// src/navigation/PageNavigator.ts
import { Page } from 'playwright';

export class PageNavigator {
    constructor(private page: Page) {}

    async goToUrl(url: string, waitUntil: 'load' | 'domcontentloaded' | 'networkidle' = 'load'): Promise<void> {
        await this.page.goto(url, { waitUntil });
    }

    async verifyCurrentUrl(expectedUrl: string): Promise<boolean> {
        return this.page.url() === expectedUrl;
    }

    async waitForSelector(selector: string, timeout: number = 3000): Promise<void> {
        await this.page.waitForSelector(selector, { timeout });
    }
}
/*
const navigator = new PageNavigator(page);
await navigator.goToUrl('https://playwright.dev', 'domcontentloaded');
const isCorrectUrl = await navigator.verifyCurrentUrl('https://playwright.dev');
await navigator.waitForSelector('h1');
*/