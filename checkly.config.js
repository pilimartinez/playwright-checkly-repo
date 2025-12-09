const { defineConfig } = require('checkly')

const config = defineConfig({
  projectName: 'Playwright Checkly Repo',
  logicalId: 'playwright-checkly-repo',
  repoUrl: 'https://github.com/pilimartinez/playwright-checkly-repo',
  checks: {
    playwrightConfigPath: './playwright.config.js',
    playwrightChecks: [
      { name: 'Playwright Tests', logicalId: 'playwright-tests' }
    ],
  },
})

module.exports = config
