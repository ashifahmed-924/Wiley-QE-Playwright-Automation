const { test, expect } = require("@playwright/test");

/**
 * Test Case ID: FC002
 * Description: Test the search functionality with filters applied.
 * Steps:
 * 1. Navigate to the homepage.
 * 2. Enter the search term `AI articles` in the search bar.
 * 3. Apply filters, such as date range (e.g., `Last year`).
 * 4. Click the search button.
 * Expected Result: The search results displayed match the term `AI articles` and the applied filters, such as articles published in the last year.
 */

test("Search and filter", async ({ page }) => {
  await page.goto("https://onlinelibrary.wiley.com");
  await page.fill('input[name="search"]', "AI articles");
  await page.click('button[type="submit"]');
  await page.click("button.filter-date-range");
  await page.click('option[value="last year"]');
  const results = await page.locator(".search-results").innerText();
  await expect(results).toContain("AI articles");
  await expect(results).toContain("Last year");
});
