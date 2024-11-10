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
      // localStorage.clear();
      // sessionStorage.clear();
    });
  });

  test('Переход на страницу авторизации', async () => {
    // Переход на страницу авторизации
    await page.waitForTimeout(1000);
    await page.goto('http://blog.ba-va.eu/');
  });

  test('Авторизация', async () => {
    await page.getByRole('button', { name: 'Sign In' }).click();
    await page.getByPlaceholder('email').click();
    await page.getByPlaceholder('email').fill('test@test.com');
    await page.getByPlaceholder('password').click();
    await page.getByPlaceholder('password').fill('123456');
    await page.locator('form').getByRole('button', { name: 'Sign In' }).click();

  });

/*
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
  */

  test('Выход из авторизованного состояния', async () => {
    await page.waitForTimeout(5000);
    await page.locator('svg').click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Log out' }).click();
    await page.waitForTimeout(3000);
  });

  test.afterAll(async () => {
    // Закрываем контекст и очищаем ресурсы
    await context.close();
  });
});








