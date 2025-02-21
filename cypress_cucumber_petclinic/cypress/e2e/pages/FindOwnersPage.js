class FindOwnersPage {

    selector = {
        //locators
        selectLastNameInput: 'input[name="lastName"]',
        clickToFindOwnerButton: 'button[type="submit"]',
        clickToAddOwnerButton: 'a[href="/owners/new"]',
        clickToOwnerBettyDavis: 'a[href="/owners/2"]', 
    }
    
    // information = {
    //     lastName: "Davis",
    //     lastName2: "George"
    // }

    selectLastName(lastName, nonExistent) {
        cy.get(this.selector.selectLastNameInput).type(lastName, nonExistent).should("be.visible")
    }

    clickToFindOwnerButton() {
        cy.get(this.selector.clickToFindOwnerButton).click()
    }

    clickToAddOwnerButton() {
        cy.get(this.selector.clickToAddOwnerButton).click()
    }

    clickToOwnerBettyDavis() {
        cy.get(this.selector.clickToOwnerBettyDavis).click()
    }
}

export default new FindOwnersPage
