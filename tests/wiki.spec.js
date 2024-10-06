import { test } from '../fixture/baseFixture'
import { expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
    await page.goto('wiki/Main_Page')
})

test('main Title check', async ({ wikiMain }) => {
    expect(await wikiMain.getMainTitle()).toBe('Welcome to Wikipedia')
})

test('main Subtitle check', async ({ wikiMain }) => {
    expect(await wikiMain.getMainSubtitle()).toBe(
        'the free encyclopedia that anyone can edit.'
    )
})

test('article counter text check', async ({ wikiMain }) => {
    expect(
        (await wikiMain.getCounterText()).includes('articles in English')
    ).toBeTruthy()
})

test('article counter link check - Statistics', async ({ wikiMain }) => {
    const link = await wikiMain.getCounterLink('Special:Statistics')
    expect(await link.getAttribute('href')).toBe('/wiki/Special:Statistics')
})

test('article counter link check - Language', async ({ wikiMain }) => {
    const link = await wikiMain.getCounterLink('English language')
    expect(await link.getAttribute('href')).toBe('/wiki/English_language')
})

test('check search form on header', async ({ wikiMain }) => {
    await expect(await wikiMain.getSearchForm()).toHaveAttribute(
        'placeholder',
        'Search Wikipedia'
    )
    await expect(await wikiMain.getSearchIcon()).toBeVisible(true)
    await expect(await wikiMain.getSearchButton()).toHaveText('Search')
})

test('check search logic', async ({ page, wikiMain }) => {
    await (await wikiMain.getSearchForm()).fill('Car')
    await (await wikiMain.getSearchButton()).click()
    await expect(await page).toHaveURL('https://en.wikipedia.org/wiki/Car')
})
