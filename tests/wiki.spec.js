import { test } from '../fixture/baseFixture'
import { expect } from '@playwright/test'
import {
    navigationLocatorsArr,
    navigationTitlesArr,
    navigationLinksArr,
} from '../fixture/menuFixture'

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

test('check search form on header', async ({ pageMain }) => {
    await expect(await pageMain.getSearchForm()).toHaveAttribute(
        'placeholder',
        'Search Wikipedia'
    )
    await expect(await pageMain.getSearchIcon()).toBeVisible(true)
    await expect(await pageMain.getSearchButton()).toHaveText('Search')
})

test('check search logic', async ({ page, pageMain }) => {
    await (await pageMain.getSearchForm()).fill('Car')
    await (await pageMain.getSearchButton()).click()
    await expect(await page).toHaveURL('https://en.wikipedia.org/wiki/Car')
})

test('hamburger menu check', async ({ pageMain }) => {
    await (await pageMain.getHamburgerMenuButton()).click()
    await expect(await pageMain.getMenuTitleByText('Main menu')).toBeVisible()

    navigationLocatorsArr.forEach(async (locator, index) => {
        const menuListItem = await pageMain.getMenuListById(locator)
        await expect(await menuListItem).toHaveText(navigationTitlesArr[index])
    })

    navigationLocatorsArr.forEach(async (locator, index) => {
        const menuListItem = await pageMain.getMenuListById(locator)
        await expect(menuListItem.locator('a')).toHaveAttribute(
            'href',
            navigationLinksArr[index]
        )
    })
})
