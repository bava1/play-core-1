// src/selectors/getCheckbox.ts
import { Page, Locator } from 'playwright';

export function getCheckbox(page: Page, options: { name?: string; id?: string; value?: string; testId?: string }): Locator {
    if (options.name) {
        return page.locator(`input[type="checkbox"][name="${options.name}"]`);
    } else if (options.id) {
        return page.locator(`#${options.id}`);
    } else if (options.value) {
        return page.locator(`input[type="checkbox"][value="${options.value}"]`);
    } else if (options.testId) {
        return page.locator(`[data-testid="${options.testId}"]`);
    } else {
        throw new Error('You must specify name, id, value or testId to search for a checkbox.');
    }
}
/*

export function getCheckbox(page: Page, options: { name?: string; id?: string; value?: string; testId?: string }): Locator {
    const key = Object.keys(options)[0];

    switch (key) {
        case 'name':
            return page.locator(`input[type="checkbox"][name="${options.name}"]`);
        case 'id':
            return page.locator(`#${options.id}`);
        case 'value':
            return page.locator(`input[type="checkbox"][value="${options.value}"]`);
        case 'testId':
            return page.locator(`[data-testid="${options.testId}"]`);
        default:
            throw new Error('You must specify name, id, value or testId to search for a checkbox.');
    }
}
*/
/*
const termsCheckbox = getCheckbox(page, { id: 'accept-terms' });
await termsCheckbox.check(); // 
await termsCheckbox.uncheck(); // 
*/
