class OwnerInformationPage {

    selector = {
        navigateToTitleOwnerInformation: 'h2',
        navigateToTableOwnerInformation: '#ownersTable',
        navigateToEditOwnerButton: `a[href="2/edit"]`,
        navigateToAddNewPetButton: `a[href="2/pets/new"]`,
        scrollToNewpet: '',
    }
    // 
    navigateToTitleOwnerInformation() {
        cy.get(this.selector.navigateToTitleOwnerInformation).should("be.visible")
    }
    navigateToTableOwnerInformation() {
        cy.get(this.selector.navigateToTableOwnerInformation).should("be.visible")
    }

    navigateToEditOwnerButton() {
        cy.get(this.selector.navigateToEditOwnerButton).click()
    }

    navigateToAddNewPetButton() {
        cy.get(this.selector.navigateToAddNewPetButton).click()
    }

    scrollToNewpet() {
        cy.scrollTo("bottom").contains("Snaky").should("be.visible")
    }
}

export default new OwnerInformationPage