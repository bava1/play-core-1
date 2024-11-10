import { Page, Locator } from 'playwright';

/**
 * Finds a button (<input type="submit">) by value, name, ID, or data-testid.
 * @param page - Copy of Playwright page.
 * @param options - Object with options for searching for the submit button.
 * @param options.value - The value of the value attribute to search for the button.
 * @param options.name - The value of the name attribute to search for the button.
 * @param options.id - ID
 * @param options.testId - The data-testid value to search for the button.
 * @returns Locator for the found button.
 */
export function getSubmitButton(page: Page, options: { value?: string; name?: string; id?: string; testId?: string }): Locator {
    const key = Object.keys(options)[0];

    switch (key) {
        case 'value':
            return page.locator(`input[type="submit"][value="${options.value}"]`);
        case 'name':
            return page.locator(`input[type="submit"][name="${options.name}"]`);
        case 'id':
            return page.locator(`#${options.id}`);
        case 'testId':
            return page.locator(`[data-testid="${options.testId}"]`);
        default:
            throw new Error('You must specify a value, name, id, or testId to search for the submit button.');
    }
}
