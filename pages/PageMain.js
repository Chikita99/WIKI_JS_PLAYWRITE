export class PageMain {
    constructor(page) {
        this.page = page
    }

    searchForm = '#searchInput'
    searchIcon = '.cdx-text-input__icon.cdx-text-input__start-icon'
    searchButton = '.cdx-button.cdx-search-input__end-button'
    hamburgerMenuButton = '#vector-main-menu-dropdown'
    menuHeader = '.vector-pinnable-header-label'
    menuList = '.vector-menu-content-list'

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

    async getHamburgerMenuButton() {
        const button = await this.page.locator(this.hamburgerMenuButton)
        return button
    }

    async getMenuTitleByText(title) {
        title = await this.page.locator(
            `${this.menuHeader}:has-text("${title}")`
        )
        return title
    }

    async getMenuListById(id) {
        return this.page.locator(`${this.menuList} #${id}`)
    }
}
