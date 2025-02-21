class HomePage {
    
    selector = {
        //locators
        navigateTotitleHomePage: 'h2',
        navigateToImgCatAndDog: 'img[alt="A cat and a dog"]',
        navigateToImgLogo: 'img[alt="Sponsored by Pivotal"]',
    }

    navigateTotitleHomePage() {
        cy.get(this.selector.navigateTotitleHomePage).click()
    }

    navigateToImgCatAndDog() {
        cy.get(this.selector.navigateToImgCatAndDog).click()
    }

    navigateToImgLogo() {
        cy.get(this.selector.navigateToImgLogo).click()
    }
}

export default new HomePage()