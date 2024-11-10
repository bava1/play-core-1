// src/selectors/getLinkByTextOrHref.ts
import { Page, Locator } from 'playwright';



/**
 * Returns a locator for a link (<a>) using the link text or href value.
 * @param page - Copy of Playwright page.
 * @param options - An object with options for searching for a link.
 * @param options.text - Link text for search.
 * @param options.href - The value of the href attribute for the search.
 * @returns Locator for the found link.
 */
export function getLinkByTextOrHref(page: Page, options: { text?: string; href?: string }): Locator {
    if (options.text) {
        return page.locator(`xpath=//a[normalize-space(text())="${options.text}"]`);
    } else if (options.href) {
        return page.locator(`a[href="${options.href}"]`);
    } else {
        throw new Error('You must specify either text or href to search for a link.');
    }
};

/*
export function getLinkByTextOrHref(page: Page, options: { text?: string; href?: string }): Locator {
    if (options.text) {
        return page.locator(`a:has-text("${options.text}")`);
    } else if (options.href) {
        return page.locator(`a[href="${options.href}"]`);
    } else {
        throw new Error('You must specify either text or href to search for a link.');
    }
}
*/


/*
    test('should click on the link with text "About"', async ({ page }) => {
        const aboutLink = getLinkByTextOrHref(page, { text: 'About' });
        await aboutLink.click();
        expect(page.url()).toContain('/about');
    });

    test('should click on the link with href "/contact"', async ({ page }) => {
        const contactLink = getLinkByTextOrHref(page, { href: '/contact' });
        await contactLink.click();
        expect(page.url()).toContain('/contact');
    });
    */