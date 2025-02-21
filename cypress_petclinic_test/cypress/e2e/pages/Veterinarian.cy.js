class VeterinarianPage {

    selector = {
        //locators
        navigateToTitleVeterinarian: 'h2',
        navigateToTableVeterinarian: '#vetsTable',
        navigateToXmlViewLink: 'a[href="/vets.xml"]',
        navigateToJsonViewLink: 'a[href="/vets.json"]',
    }

    navigateToTitleVeterinarian() {
        cy.get(this.selector.navigateToTitleVeterinarian).should("be.visible")
    }

    navigateOnTableVeterinarian() {
        cy.get(this.selector.navigateToTableVeterinarian).should("be.visible")
    }

    navigateToXmlViewLink() {
        cy.get(this.selector.navigateToXmlViewLink).click()
    }

    navigateToJsonViewLink() {
        cy.get(this.selector.navigateToJsonViewLink).click()
    }
}

export default new VeterinarianPage