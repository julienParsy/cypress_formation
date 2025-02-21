class FindOwnersPage {

    selector = {
        //locators
        selectLastNameInput: 'input[name="lastName"]',
        clickToFindOwnerButton: 'button[type="submit"]',
        clickToAddOwnerButton: 'a[href="/owners/new"]',
        clickToOwnerIdTwo: `a[href="/owners/2"]`, 
    }
    
    information = {
        lastName: "Davis",
        lastName2: "George"
    }

    selectLastName() {
        cy.get(this.selector.selectLastNameInput).type(this.information.lastName)
    }
    clickToFindOwnerButton() {
        cy.get(this.selector.clickToFindOwnerButton).click()
    }

    clickToAddOwnerButton() {
        cy.get(this.selector.clickToAddOwnerButton).click()
    }

    clickToOwnerIdTwo() {
        cy.get(this.selector.clickToOwnerIdTwo).click()
    }
}

export default new FindOwnersPage
