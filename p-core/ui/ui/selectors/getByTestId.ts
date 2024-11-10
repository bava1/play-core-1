import { Page, Locator } from 'playwright';

export function getByTestId(page: Page, testId: string): Locator {
    return page.locator(`[data-testid="${testId}"]`);
}