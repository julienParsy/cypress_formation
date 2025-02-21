import NavBar from "./pages/NavBar.cy.js"
import FindOwnersPage from "./pages/FindOwnersPage.cy.js"
import OwnerInformationPage from "./pages/OwnerInformationPage.cy.js"
import NewPetPage from "./pages/NewPetPage.cy.js"
// import ErrorPage from "./pages/ErrorPage.cy.js"
// import VeterinarianPage from "./pages/Veterinarian.cy.js"
// import HomePage from "./pages/HomePage.cy.js"


context("Suite de test ", () => {

// Avant de lancer les tests
  before(() => {
    // Se rend sur la page d'accueil
    cy.visit("/")
    // Efface les cookies
    cy.clearAllCookies()
    // Reload la page
    cy.reload()
  })

  describe("Test : Ajout d'un nouvel animal", () => {
    it("Test : Ajout d'un nouvel animal", () => {
      // Se rend sur la page d'accueil
      cy.visit("/")

      // Clique sur le bouton "Find owners"
      NavBar.navigateToOwnersLink()

      // Remplir le champ "lastName"
      FindOwnersPage.selectLastName()

      // Clique sur le bouton "Find Owner"
      FindOwnersPage.clickToFindOwnerButton()

      // Clique sur le lien du propriétaire 2
      FindOwnersPage.clickToOwnerIdTwo()

      // Clique sur le bouton "Add Pet"
      OwnerInformationPage.navigateToAddNewPetButton()

      // Remplir le formulaire \\
      NewPetPage.navigateToNameInput()
      NewPetPage.navigateToBirthDateInput()
      NewPetPage.ChooseAnimalType()
      // Clique sur le bouton "Submit"
      NewPetPage.navigateToSubmitButton()

      // Clique sur le bouton "Find owners"
      NavBar.navigateToOwnersLink()

      // Recherche le propriètaire et scroll jusque l'animal ajouté
      FindOwnersPage.selectLastName()
      FindOwnersPage.clickToFindOwnerButton()
      FindOwnersPage.clickToOwnerIdTwo()
      OwnerInformationPage.scrollToNewpet()
    })
  })
})

