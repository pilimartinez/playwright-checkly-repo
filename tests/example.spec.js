const { test, expect } = require('@playwright/test')

test('example test - Checkly homepage T', async ({ page }) => {
  await page.goto('https://welcome.checklyhq.com')
  const companyLogo = page.getByAltText(/logo/i)
  await expect(companyLogo).toBeVisible()
})
