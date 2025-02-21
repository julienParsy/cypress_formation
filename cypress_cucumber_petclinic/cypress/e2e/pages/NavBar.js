class NavBar {

    selector = {
        //locators
        navigateToLogoLink: 'a[href = "/"]',
        navigateToHomeLink: 'a[title="home page"]',
        navigateToOwnersLink: 'a[href = "/owners/find"]',
        navigateToVetsLink: 'a[href = "/vets"]',
        navigateToOupsLink: 'a[href = "/oups"]',
    }

    navigateToLogoLink() {
        cy.get(this.selector.navigateToLogoLink).click()
    }

    navigateToHomeLink() {
        cy.get(this.selector.navigateToHomeLink).click()
    }

    navigateToOwnersLink() {
        cy.get(this.selector.navigateToOwnersLink).click()
    }

    navigateToVetsLink() {
        cy.get(this.selector.navigateToVetsLink).click()
    }

    navigateToOupsLink() {
        cy.get(this.selector.navigateToOupsLink).click()
    }
}

export default new NavBar