import { test as base } from '@playwright/test'
import { WikiMain } from '../pages/WikiMain'

exports.test = base.test.extend({
    wikiMain: async ({ page }, use) => {
        await use(new WikiMain(page))
    },
})
exports.expect = base.expect
