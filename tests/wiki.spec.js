import { test } from '../fixture/baseFixture'
import { expect } from '@playwright/test'

test('main Title check', async ({ wikiMain, page }) => {
    await page.goto('wiki/Main_Page')
    expect(await wikiMain.getMainTitle()).toBe('Welcome to Wikipedia')
})

test('main Subtitle check', async ({ wikiMain, page }) => {
    await page.goto('wiki/Main_Page')
    expect(await wikiMain.getMainSubtitle()).toBe(
        'the free encyclopedia that anyone can edit.'
    )
})
