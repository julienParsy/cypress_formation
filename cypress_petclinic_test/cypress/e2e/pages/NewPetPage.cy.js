class NewPetPage {

    selector = {
        //locators
        navigateToTitleNewPet: 'h2',
        navigateToNameInput: 'input[name="name"]',
        navigateToBirthDateInput: 'input[name="birthDate"]',
        ChooseAnimalType: '#type',
        navigateToSubmitButton: 'button[type="submit"]',
    }

    information = {
        name: "Alphonse",
        type: "dog"
    }

    calendar = {
        year: "2021",
        month: "May",
        day: "11"
    }

    navigateToTitleNewPet() {
        cy.get(this.selector.navigateToTitleNewPet).should("be.visible")
    }
    navigateToNameInput() {
        cy.get(this.selector.navigateToNameInput).type(this.information.name)
    }
    
    navigateToBirthDateInput() {
        cy.get(this.selector.navigateToBirthDateInput).click()
        cy.get('.numInput').type(this.calendar.year)
        cy.get('.flatpickr-monthDropdown-months').select(this.calendar.month)
        cy.get('.dayContainer').contains(this.calendar.day).click()
    }
    
    ChooseAnimalType() {
        cy.get(this.selector.ChooseAnimalType).select(this.information.type)
    }

    navigateToSubmitButton() {
        cy.get(this.selector.navigateToSubmitButton).click()    
    }
}
export default new NewPetPage