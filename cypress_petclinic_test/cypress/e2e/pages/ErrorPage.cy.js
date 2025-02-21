class ErrorPage {

    //locators
    selector = {
        navigateToImgCatAndDog: 'img[alt="A cat and a dog"]',
        navigateToTitleErrorPage: 'h2',
        navigatetoErrorParagraph: 'p',
    }

    navigateToImgCatAndDog() {
        cy.get(this.selector.navigateToImgCatAndDog).scrollIntoView()
    }

    navigateToTitleErrorPage() {
        cy.get(this.selector.navigateToTitleErrorPage).scrollIntoView()
    }

    navigatetoErrorParagraph() {
        cy.get(this.selector.navigatetoErrorParagraph).scrollIntoView()
    }

}

export default new ErrorPage()