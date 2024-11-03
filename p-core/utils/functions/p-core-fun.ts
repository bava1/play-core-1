// src/navigation/goToUrl.ts functionality
import { Page } from 'playwright';

export async function goToUrl(page: Page, url: string, options?: { waitUntil?: 'load' | 'domcontentloaded' | 'networkidle' }) {
    await page.goto(url, {
        waitUntil: options?.waitUntil || 'load', // по умолчанию ждем полной загрузки
    });
}

// src/navigation/NavigationComponent.ts object

export class NavigationComponent {
    constructor(private page: Page) {}

    async goTo(url: string, waitUntil: 'load' | 'domcontentloaded' | 'networkidle' = 'load') {
        await this.page.goto(url, { waitUntil });
    }

    async refresh(waitUntil: 'load' | 'domcontentloaded' | 'networkidle' = 'load') {
        await this.page.reload({ waitUntil });
    }

    async goBack() {
        await this.page.goBack();
    }

    async goForward() {
        await this.page.goForward();
    }
}

// src/navigation/PageNavigator.ts module

export class PageNavigator {
    constructor(private page: Page) {}

    async goToUrl(url: string, waitUntil: 'load' | 'domcontentloaded' | 'networkidle' = 'load'): Promise<void> {
        await this.page.goto(url, { waitUntil });
    }

    async verifyCurrentUrl(expectedUrl: string): Promise<boolean> {
        return this.page.url() === expectedUrl;
    }

    async waitForSelector(selector: string, timeout: number = 3000): Promise<void> {
        await this.page.waitForSelector(selector, { timeout });
    }
}

// src/navigation/ConfigurableNavigator.ts parameters

type NavigationOptions = {
    waitUntil?: 'load' | 'domcontentloaded' | 'networkidle';
    baseUrl?: string;
};

export class ConfigurableNavigator {
    private baseUrl: string;
    private waitUntil: 'load' | 'domcontentloaded' | 'networkidle';

    constructor(private page: Page, options?: NavigationOptions) {
        this.baseUrl = options?.baseUrl || 'https://playwright.dev';
        this.waitUntil = options?.waitUntil || 'load';
    }

    async navigateTo(path: string): Promise<void> {
        await this.page.goto(`${this.baseUrl}${path}`, { waitUntil: this.waitUntil });
    }
}

// src/selectors/getByTestId.ts locator
import { Locator } from 'playwright';

export function getByTestId(page: Page, testId: string): Locator {
    return page.locator(`[data-testid="${testId}"]`);
}

// src/selectors/getByText.ts
export function getByText(page: Page, text: string): Locator {
    return page.locator(`text=${text}`);
}



