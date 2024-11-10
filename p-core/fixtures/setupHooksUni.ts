import { Page, BrowserContext } from 'playwright';

// Universal beforeEach for navigation or preparation
export async function setupBeforeEach(
    page: Page,
    url: string,
    options?: {
        login?: { username: string; password: string }; // Login parameters
        localStorageData?: Record<string, string>;       // Data to install in localStorage
        cookies?: Array<{ name: string; value: string; domain?: string }>; // Cookie settings
        waitUntil?: 'load' | 'domcontentloaded' | 'networkidle'; // Conditions for waiting for download
    }
) {
    // Navigation to URL
    await page.goto(url, { waitUntil: options?.waitUntil || 'domcontentloaded' });

    // Login if parameters are specified
    if (options?.login) {
        await page.fill('#username', options.login.username);
        await page.fill('#password', options.login.password);
        await page.click('#login-button');
    }

    // Setting data to localStorage
    if (options?.localStorageData) {
        await page.evaluate((data) => {
            for (const key in data) {
                localStorage.setItem(key, data[key]);
            }
        }, options.localStorageData);
    }

    // Setting cookies if specified
    if (options?.cookies) {
        const context = page.context();
        await context.addCookies(options.cookies.map(cookie => ({
            ...cookie,
            url: url // We specify the URL for the domain so that the cookie was applied correctly
        })));
    }
}

// Universal afterEach for cleaning the environment
export async function setupAfterEach(
    page: Page,
    options?: {
        clearLocalStorage?: boolean;  // Cleaning localStorage
        clearCookies?: boolean;       // Clearing cookies
        networkIdleWait?: boolean;    // Waiting for network requests to complete
    }
) {
    // Waiting for network requests to complete
    if (options?.networkIdleWait) {
        await page.waitForLoadState('networkidle');
    }

    // Clear localStorage if specified
    if (options?.clearLocalStorage) {
        await page.evaluate(() => localStorage.clear());
    }

    // Clear cookies if specified
    if (options?.clearCookies) {
        const context = page.context();
        await context.clearCookies();
    }
}

/*
//Use case example
test.beforeEach(async ({ page }) => {
    await setupBeforeEach(page, 'https://example.com/dashboard', {
        login: { username: 'test_user', password: 'password123' },
        localStorageData: { theme: 'dark' },
        cookies: [{ name: 'session', value: '123abc', domain: '.example.com' }],
        waitUntil: 'load',
    });
});

test.afterEach(async ({ page }) => {
    await setupAfterEach(page, {
        clearLocalStorage: true,
        clearCookies: true,
        networkIdleWait: true,
    });
});
*/