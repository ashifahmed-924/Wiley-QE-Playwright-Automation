const { test, expect } = require("@playwright/test");

/**
 * Test Case ID: FC005
 * Description: Verify login functionality based on the email address provided.
 * Steps:
 * 1. Navigate to the login page.
 * 2. Enter the email address `test@example.com`.
 * 3. Click the login button.
 * Expected Result: If the email address exists, the login is successful. If not, an error message is displayed indicating that the email does not exist.
 */

test("Check login email address", async ({ page }) => {
  await page.goto("https://onlinelibrary.wiley.com/login");
  await page.fill('input[name="username"]', "test@example.com");
  await page.click('button[type="submit"]');
  // Check if login is successful or an error message is displayed
  const loginSuccess = await page.locator(".homepage").isVisible();
  if (loginSuccess) {
    await expect(page).toHaveURL("https://onlinelibrary.wiley.com/home");
  } else {
    const errorMessage = await page.locator(".error-message").innerText();
    await expect(errorMessage).toBe("The email address does not exist.");
  }
});
