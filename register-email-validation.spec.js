const { test, expect } = require("@playwright/test");

/**
 * Test Case ID: FC001
 * Description: Validate that the system correctly handles the registration of an invalid email address.
 * Steps:
 * 1. Navigate to the registration page.
 * 2. Enter the email address `test@example`.
 * 3. Click the register/submit button.
 * Expected Result: A validation message is displayed, prompting the user with "Please enter a valid e-mail address".
 */

test("Register test email address validation", async ({ page }) => {
  await page.goto("https://onlinelibrary.wiley.com/register");
  await page.fill('input[name="email"]', "test@example");
  await page.click('button[type="submit"]');
  const errorMessage = await page.locator(".error-message").innerText();
  await expect(errorMessage).toBe("Please enter a valid e-mail address.");
});
