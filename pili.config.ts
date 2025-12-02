import { defineConfig } from 'checkly'

const config = defineConfig({
  projectName: 'Playwright Checkly Repo 1',
  logicalId: 'playwright-checkly-repo',
  repoUrl: 'https://github.com/pilimartinez/playwright-checkly-repo',
  checks: {
    playwrightConfigPath: './playwright.config.js',
    playwrightChecks: [
      { name: 'Checkly Tests', logicalId: 'checkly-tests' }
    ],
    environmentVariables: [
      { key: "TEST_USERNAME", value: "testuser@example.com" },
      { key: "TEST_USERNAMI", value: "testuser@example.com" },
    ],
  },
})

export default config
