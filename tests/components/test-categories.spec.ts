


/*
// Gemini 1.5 Pro
import { test, expect, BrowserContext, Page } from '@playwright/test';

let context: BrowserContext;

test.describe('Авторизация и поиск категории', () => {
  test.beforeAll(async ({ browser }) => {
    // Создание нового контекста
    context = await browser.newContext({
      viewport: { width: 1280, height: 720 },
      // Можно добавить дополнительные настройки контекста
    });
  });

  test('Переход на страницу авторизации', async () => {
    const page = await context.newPage();
    // 2. Переход на страницу авторизации
    await page.goto('/login');
    await expect(page).toHaveTitle(/Авторизация/);
  });

  test('Авторизация', async () => {
    const page = await context.newPage();
    // 3. Авторизация
    await page.fill('input[name="email"]', 'test@example.com');
    await page.fill('input[name="password"]', 'password123');
    await page.click('button[type="submit"]');
    await page.waitForNavigation();
  });

  test('Переход на главную страницу', async () => {
    const page = await context.newPage();
    // 4. Переход на главную страницу
    await page.goto('/');
    await expect(page).toHaveTitle(/Главная страница/);
  });

  test('Проверка видимости списка категорий', async () => {
    const page = await context.newPage();
    // 5. Проверка видимости списка категорий
    const categoriesList = await page.$$('.categories-list');
    await expect(categoriesList).not.toBeNull();
  });

  test('Поиск категории Hotels', async () => {
    const page = await context.newPage();
    // 6. Поиск категории Hotels
    const hotelsCategory = await page.$('.categories-list li:has-text("Hotels")');
    await expect(hotelsCategory).not.toBeNull();
  });

  test('Выход из авторизованного состояния', async () => {
    const page = await context.newPage();
    // 7. Выход из авторизованного состояния
    await page.click('a[href="/logout"]');
    await page.waitForNavigation();
  });

  test.afterAll(async () => {
    // Закрытие контекста
    await context.close();
  });
});
*/




/*
// React Expert
import { test, expect, BrowserContext, Page } from '@playwright/test';

let context: BrowserContext;

test.describe('Авторизация и поиск категории', () => {
  test.beforeAll(async ({ browser }) => {
    // Создание нового контекста
    context = await browser.newContext({
      viewport: { width: 1280, height: 720 },
      // Можно добавить дополнительные настройки контекста
    });
  });

  test('Переход на страницу авторизации', async () => {
    const page = await context.newPage();
    // 2. Переход на страницу авторизации
    await page.goto('/login');
    await expect(page).toHaveTitle(/Авторизация/);
  });

  test('Авторизация', async () => {
    const page = await context.newPage();
    // 3. Авторизация
    await page.fill('input[name="email"]', 'test@example.com');
    await page.fill('input[name="password"]', 'password123');
    await page.click('button[type="submit"]');
    await page.waitForNavigation();
  });

  test('Переход на главную страницу', async () => {
    const page = await context.newPage();
    // 4. Переход на главную страницу
    await page.goto('/');
    await expect(page).toHaveTitle(/Главная страница/);
  });

  test('Проверка видимости списка категорий', async () => {
    const page = await context.newPage();
    // 5. Проверка видимости списка категорий
    const categoriesList = await page.$$('.categories-list');
    await expect(categoriesList).not.toBeNull();
  });

  test('Поиск категории Hotels', async () => {
    const page = await context.newPage();
    // 6. Поиск категории Hotels
    const hotelsCategory = await page.$('.categories-list li:has-text("Hotels")');
    await expect(hotelsCategory).not.toBeNull();
  });

  test('Выход из авторизованного состояния', async () => {
    const page = await context.newPage();
    // 7. Выход из авторизованного состояния
    await page.click('a[href="/logout"]');
    await page.waitForNavigation();
  });

  test.afterAll(async () => {
    // Закрытие контекста
    await context.close();
  });
});
*/

/*
// Claude 3.5 Sonnet V2
import { test, expect, BrowserContext, Page } from '@playwright/test';

let context: BrowserContext;
let page: Page;

test.describe('Авторизация и поиск категории', () => {
  test.beforeAll(async ({ browser }) => {
    // Создаем новый контекст и очищаем его от cookies
    context = await browser.newContext();
    await context.clearCookies();
    page = await context.newPage();
  });

  test.beforeEach(async () => {
    // Очищаем localStorage и sessionStorage перед каждым тестом
    await page.evaluate(() => {
      localStorage.clear();
      sessionStorage.clear();
    });
  });

  test('Переход на страницу авторизации', async () => {
    // Переход на страницу авторизации
    await page.goto('/login');
    await expect(page).toHaveTitle(/Авторизация/i);
  });

  test('Авторизация', async () => {
    // Заполняем форму авторизации и отправляем
    await page.fill('input[name="email"]', 'test@example.com');
    await page.fill('input[name="password"]', 'password123');
    await page.click('button[type="submit"]');
    // Ждем перенаправления
    await page.waitForNavigation();
    await expect(page).toHaveTitle(/Главная страница/i);
  });

  test('Проверка видимости списка категорий', async () => {
    // Проверка, что список категорий отображается на странице
    const categoriesList = page.locator('.categories-list');
    await expect(categoriesList).toBeVisible();
  });

  test('Поиск категории Hotels', async () => {
    // Поиск категории Hotels в списке категорий
    const hotelsCategory = page.locator('.categories-list li:has-text("Hotels")');
    await expect(hotelsCategory).toBeVisible();
  });

  test('Выход из авторизованного состояния', async () => {
    // Нажимаем на ссылку выхода из аккаунта
    await page.click('a[href="/logout"]');
    await page.waitForNavigation();
    await expect(page).toHaveTitle(/Авторизация/i);
  });

  test.afterAll(async () => {
    // Закрываем контекст и очищаем ресурсы
    await context.close();
  });
});
*/

/*
import { test, expect } from '@playwright/test';
// GPT 4
let context;

test.describe('Авторизация и поиск категории', () => {
  test.beforeAll(async ({ page }) => {
    // Создание или открытие контекста
    await page.goto('https://example.com/login');
  });

  test('Переход на страницу авторизации', async ({ page }) => {
    // 2. Переход на страницу авторизации
    await page.goto('/login');
    await expect(page).toHaveTitle('Авторизация');
  });

  test('Авторизация', async ({ page }) => {
    // 3. Авторизация путем введения в форму email и password. И нажатием кнопки.
    await page.fill('#email', 'username');
    await page.fill('#password', 'password');
    await page.click('#login-button');
  });

  test('Переход на главную страницу', async ({ page }) => {
    // 4. Переход на главную страницу
    await page.goto('https://example.com/main-page');
  });

  test('Проверка видимости списка категорий', async ({ page }) => {
    // 5. Проверка видимости списка категорий
    const categoriesList = await page.$$('.categories-list');
    await expect(categoriesList).not.toBeNull();
  });

  test('Поиск категории Hotels', async ({ page }) => {
    // 6. Поиск категории Hotels
    const categories = await page.$$('.category-list-item');
    expect(categories).not.toHaveLength(0);
    const hotelCategory = await page.$(`li:has-text("Hotels")`);
    expect(hotelCategory).not.toBe(null);
  });

  test('Выход из авторизованного состояния', async ({ page }) => {
    // 7. Выход из авторизованного состояния
    await page.click('#logout-link');
  });

  test.afterAll(() => {
    // Закрытие контекста. Точнее удаление Инкапсулированной среды исполнения. Очистка стека.
    context.close();
  });
});

*/
/*
Liama 3
import { test, expect } from '@playwright/test';

test.describe('Авторизация и поиск категории', () => {
  let context;

  test.beforeAll(async ({ page }) => {
    // Создание или открытие контекста
    context = await page.context();
    await context.clearCookies();
  });

  test('Переход на страницу авторизации', async ({ page }) => {
    // 2. Переход на страницу авторизации
    await page.goto('/login');
    await expect(page).toHaveTitle('Авторизация');
  });

  test('Авторизация', async ({ page }) => {
    // 3. Авторизация
    await page.fill('input[name="email"]', 'test@example.com');
    await page.fill('input[name="password"]', 'password123');
    await page.click('button[type="submit"]');
  });

  test('Переход на главную страницу', async ({ page }) => {
    // 4. Переход на главную страницу
    await page.waitForNavigation();
    await expect(page).toHaveTitle('Главная страница');
  });

  test('Проверка видимости списка категорий', async ({ page }) => {
    // 5. Проверка видимости списка категорий
    const categoriesList = await page.$$('.categories-list');
    await expect(categoriesList).not.toBeNull();
  });

  test('Поиск категории Hotels', async ({ page }) => {
    // 6. Поиск категории Hotels
    //const hotelsCategory = await page.$('.categories-list li', { hasText: 'Hotels' });
    const hotelsCategory = await page.$('.categories-list li:has-text("Hotels")');
    await expect(hotelsCategory).not.toBeNull();
  });

  test('Выход из авторизованного состояния', async ({ page }) => {
    // 7. Выход из авторизованного состояния
    await page.click('a[href="/logout"]');
  });

  test.afterAll(() => {
    // Закрытие контекста
    context.close();
  });
});
*/
/*
import { test, expect } from '@playwright/test';
import { Context } from 'playwright';

test('авторизация и поиск категории', async ({ page }) => {
  // Создание или открытие контекста
  await page.goto('https://example.com/login');

  // Авторизация путем введения в форму email и password. И нажатием кнопки.
  await page.fill('#email', 'username');
  await page.fill('#password', 'password');
  await page.click('#login-button');

  // После успешной авторизации переход на главную страницу
  await page.goto('https://example.com/main-page');

  // Поиск в списке категорий категорию по имени – Hotels
  const categories = await page.$$('.category-list-item');
  expect(categories).not.toHaveLength(0);
  const hotelCategory = await page.$(`li:has-text("Hotels")`);
  expect(hotelCategory).not.toBe(null);

  // Выход из авторизованного состояния путем нажатия на ссылку – LogOut
  await page.click('#logout-link');

  // Закрытие контекста. Точнее удаление Инкапсулированной среды исполнения. Очистка стека.
  await context.close();
});
*/

/*
Создай компонент теста на Typescript для playwright. 
Задача теста:
Создается набор тестов для запуска в изолированном контексте. Инкапсулированная среда исполнения. 
1. Создание или открытие контекста. 
2. Переход внутри него на страницу авторизации - LogIn.
3. Авторизация путем введения в форму email и password. И нажатием кнопки.
4. После успешной авторизации переход на главную страницу. 
5. На главной странице имеется список категорий. Этот список виден только авторизованному пользователю.
6. Поиск в списке категорий категорию по имени – Hotels. 
7. Выход из авторизованного состояния путем нажатия на ссылку – LogOut.
8. Закрытие контекста. Точнее удаление Инкапсулированной среды исполнения. Очистка стека. 
*/
