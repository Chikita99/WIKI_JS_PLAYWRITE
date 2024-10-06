export class WikiMain {
    constructor(page) {
        this.page = page
    }

    mainTitle = '#Welcome_to_Wikipedia'
    mainSubtitle = '#mp-free'
    articleCountText = '#articlecount'
    articleCountLink = (specialTitle) =>
        `//div[@id='articlecount']/a[@title='${specialTitle}']`
    searchForm = '#searchInput'
    searchIcon = '.cdx-text-input__icon.cdx-text-input__start-icon'
    searchButton = '.cdx-button.cdx-search-input__end-button'

    async getMainTitle() {
        const title = await this.page.locator(this.mainTitle).textContent()
        return title
    }

    async getMainSubtitle() {
        const subTitle = await this.page
            .locator(this.mainSubtitle)
            .textContent()
        return subTitle
    }

    async getCounterText() {
        const countArticle = await this.page
            .locator(this.articleCountText)
            .textContent()
        return countArticle
    }

    async getCounterLink(specialTitle) {
        const countLink = await this.page.locator(
            `xpath=${this.articleCountLink(specialTitle)}`
        )
        return countLink
    }

    async getSearchForm() {
        const search = await this.page.locator(this.searchForm)
        return search
    }

    async getSearchIcon() {
        const icon = await this.page.locator(this.searchIcon)
        return icon
    }

    async getSearchButton() {
        const button = await this.page.locator(this.searchButton)
        return button
    }
}
