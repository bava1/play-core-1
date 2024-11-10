// src/navigation/NavigationComponent.ts
import { Page } from 'playwright';

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
/*
const nav = new NavigationComponent(page);
await nav.goTo('https://playwright.dev', 'networkidle');
await nav.refresh();
await nav.goBack();
*/
