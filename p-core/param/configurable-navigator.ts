import { Page } from 'playwright';

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
/*
const navigator = new ConfigurableNavigator(page, { baseUrl: 'https://myapp.com', waitUntil: 'networkidle' });
await navigator.navigateTo('/login');
*/

