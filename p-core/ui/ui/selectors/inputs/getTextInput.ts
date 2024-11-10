// src/selectors/getTextInput.ts
import { Page, Locator } from 'playwright';

export function getTextInput(page: Page, options: { name?: string; placeholder?: string; id?: string; testId?: string }): Locator {
    if (options.name) {
        return page.locator(`input[name="${options.name}"]`);
    } else if (options.placeholder) {
        return page.locator(`input[placeholder="${options.placeholder}"]`);
    } else if (options.id) {
        return page.locator(`#${options.id}`);
    } else if (options.testId) {
        return page.locator(`[data-testid="${options.testId}"]`);
    } else {
        throw new Error('You must specify name, placeholder, id or testId to search for a text field.');
    }
}
/*

export function getTextInput(page: Page, options: { name?: string; placeholder?: string; id?: string; testId?: string }): Locator {
    const key = Object.keys(options)[0];

    switch (key) {
        case 'name':
            return page.locator(`input[name="${options.name}"]`);
        case 'placeholder':
            return page.locator(`input[placeholder="${options.placeholder}"]`);
        case 'id':
            return page.locator(`#${options.id}`);
        case 'testId':
            return page.locator(`[data-testid="${options.testId}"]`);
        default:
            throw new Error('You must specify name, placeholder, id or testId to search for a text field.');
    }
}
*/
/*
const emailInput = getTextInput(page, { placeholder: 'Enter your email' });
await emailInput.fill('test@example.com');
*/
