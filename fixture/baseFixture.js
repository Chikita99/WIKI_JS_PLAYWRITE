import { test as base } from '@playwright/test'
import { WikiMain } from '../pages/WikiMain'
import { PageMain } from '../pages/PageMain'

export const test = base.test.extend({
    wikiMain: async ({ page }, use) => {
        await use(new WikiMain(page))
    },
    pageMain: async ({ page }, use) => {
        await use(new PageMain(page))
    },
})
export const expect = base.expect
