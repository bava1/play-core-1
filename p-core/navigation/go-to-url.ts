// src/navigation/goToUrl.ts
import { Page } from 'playwright';

export async function goToUrl(page: Page, url: string, options?: { waitUntil?: 'load' | 'domcontentloaded' | 'networkidle' }) {
    await page.goto(url, {
        waitUntil: options?.waitUntil || 'load', // by default we wait for the full download
    });
}

