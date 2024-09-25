export class WikiMain {
    constructor(page) {
        this.page = page
    }

    mainTitle = '#Welcome_to_Wikipedia'
    mainSubtitle = '#mp-free'
    articleCountText = '#articlecount'
    //articleCountNumber = "//div[@id='articlecount']/a[@title='${specialTitle}']";

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

    async getCounterText() {
        const countArticle = await (
            await this.page.locator(this.articleCountText)
        ).textContent()
        return countArticle
    }

    async getCounterLink(specialTitle) {
        const xpath = `//div[@id='articlecount']/a[@title='${specialTitle}']`
        const countLink = await this.page.locator(`xpath=${xpath}`)
        return countLink
    }
}
