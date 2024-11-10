import { Page, Locator } from 'playwright';

export function getByText(page: Page, options: { text: string; exact?: boolean }): Locator {
    const { text, exact = true } = options;

    if (exact) {
        // Using xpath for exact text matching with case sensitivity
        return page.locator(`xpath=//*[normalize-space(text())="${text}"]`);
    } else {
        // For partial match search we use Playwright text selector
        return page.locator(`text=${text}`);
    }
}

/*
export function getByText(page: Page, text: string): Locator {
    return page.locator(`text=${text}`);
}
*/
