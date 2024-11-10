// src/selectors/getRadioButton.ts
import { Page, Locator } from 'playwright';

export function getRadioButton(page: Page, options: { name?: string; value?: string; id?: string; testId?: string }): Locator {
    if (options.name && options.value) {
        return page.locator(`input[type="radio"][name="${options.name}"][value="${options.value}"]`);
    } else if (options.id) {
        return page.locator(`#${options.id}`);
    } else if (options.testId) {
        return page.locator(`[data-testid="${options.testId}"]`);
    } else {
        throw new Error('You must specify name and value, id or testId to search for a radio button.');
    }
}
/*

export function getRadioButton(page: Page, options: { name?: string; value?: string; id?: string; testId?: string }): Locator {
    const key = Object.keys(options)[0];

    switch (key) {
        case 'name':
            if (!options.value) throw new Error('При указании name необходимо также указать value для радиокнопки.');
            return page.locator(`input[type="radio"][name="${options.name}"][value="${options.value}"]`);
        case 'id':
            return page.locator(`#${options.id}`);
        case 'testId':
            return page.locator(`[data-testid="${options.testId}"]`);
        default:
            throw new Error('You must specify name and value, id or testId to search for a radio button.');
    }
}
*/

/*
const genderRadioButton = getRadioButton(page, { name: 'gender', value: 'male' });
await genderRadioButton.check(); // 
*/
