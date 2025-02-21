import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import NavBar from "../../e2e/pages/NavBar.js"
import FindOwnersPage from "../../e2e/pages/FindOwnersPage.js"

// Feature('Find an Owner on the Petclinic Website'), () => {

// Scenario('Search for an existing owner', () => {

Given('I am on the Find Owners page', () => {

    cy.visit('/');
    NavBar.navigateToOwnersLink();

});

When('I search the owner {string}', (lastName) => {

    FindOwnersPage.selectLastName(lastName)
    FindOwnersPage.clickToFindOwnerButton()
    
});

Then('I should see the owner details for {string}', () => {
    
    FindOwnersPage.clickToOwnerBettyDavis()

});

// });


// }
// Scenario('Search for a non-existing owner', () => {

//     Given('I am on the Find Owners page', () => {

//         cy.visit('/');
//         NavBar.navigateToOwnersLink();

//     });

//     When('I search the owner {string}', (nonExistent) => {

//         FindOwnersPage.selectLastName(nonExistent)
//         FindOwnersPage.clickToFindOwnerButton()
//     });

//     Then('I should see a message saying {string}', (message) => {

//         cy.contains(message = "has not been found")

//     });
// });
