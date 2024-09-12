export class WikiMain {
    constructor(page) {
        this.page = page
    }

    mainTitle = '#Welcome_to_Wikipedia'
    mainSubtitle = '#mp-free'

    async getMainTitle() {
        const title = await (
            await this.page.locator(this.mainTitle)
        ).textContent()
        return title
    }

    async getMainSubtitle() {
        const subTitle = await (
            await this.page.locator(this.mainSubtitle)
        ).textContent()
        return subTitle
    }
}
