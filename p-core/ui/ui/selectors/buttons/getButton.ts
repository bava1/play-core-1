// src/selectors/getButton.ts
import { Page, Locator } from 'playwright';

/**
 * Finds a button (<button> or <input type="button">) by text, name, ID, or data-testid.
 * @param page - Copy of Playwright page.
 * @param options - Object with options for searching the button.
 * @param options.text - Search button text.
 * @param options.name - The value of the name attribute to search for the button.
 * @param options.id - ID 
 * @param options.testId - The data-testid value to search for the button.
 * @returns Locator for the found button.
 */
export function getButton(page: Page, options: { text?: string; name?: string; id?: string; testId?: string }): Locator {
    const key = Object.keys(options)[0];

    switch (key) {
        case 'text':
            return page.locator(`button:has-text("${options.text}")`);
        case 'name':
            return page.locator(`button[name="${options.name}"], input[type="button"][name="${options.name}"]`);
        case 'id':
            return page.locator(`#${options.id}`);
        case 'testId':
            return page.locator(`[data-testid="${options.testId}"]`);
        default:
            throw new Error('You must specify text, name, id or testId to search for a button.');
    }
}

/*
    test('should click on the button with specific text', async ({ page }) => {
        const submitButton = getButton(page, { text: 'Submit' });
        await submitButton.click();
    });

    test('should click on the button with a specific name', async ({ page }) => {
        const resetButton = getButton(page, { name: 'reset' });
        await resetButton.click();
    });

    test('should click on the button with a specific ID', async ({ page }) => {
        const saveButton = getButton(page, { id: 'save-button' });
        await saveButton.click();
    });

    test('should click on the button with a specific data-testid', async ({ page }) => {
        const cancelButton = getButton(page, { testId: 'cancel-button' });
        await cancelButton.click();
    });
*/
