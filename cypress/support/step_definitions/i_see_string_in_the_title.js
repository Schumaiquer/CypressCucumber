import { Then } from "cypress-cucumber-preprocessor/steps";
 
Then(`I see {string} in the title`, (title) => {
  cy.get('title').should('contain','Google')
})