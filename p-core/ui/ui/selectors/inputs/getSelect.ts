// src/selectors/getSelect.ts
import { Page, Locator } from 'playwright';

export function getSelect(page: Page, options: { name?: string; id?: string; testId?: string }): Locator {
    if (options.name) {
        return page.locator(`select[name="${options.name}"]`);
    } else if (options.id) {
        return page.locator(`#${options.id}`);
    } else if (options.testId) {
        return page.locator(`[data-testid="${options.testId}"]`);
    } else {
        throw new Error('You must specify name, id or testId to search for the dropdown list.');
    }
}
/*

export function getSelect(page: Page, options: { name?: string; id?: string; testId?: string }): Locator {
    const key = Object.keys(options)[0];

    switch (key) {
        case 'name':
            return page.locator(`select[name="${options.name}"]`);
        case 'id':
            return page.locator(`#${options.id}`);
        case 'testId':
            return page.locator(`[data-testid="${options.testId}"]`);
        default:
            throw new Error('You must specify name, id or testId to search for the dropdown list.');
    }
}
*/
/*
const countrySelect = getSelect(page, { id: 'country' });
await countrySelect.selectOption('US'); // 
*/