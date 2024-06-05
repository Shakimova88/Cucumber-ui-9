const { Then, Given, When } = require('@badeball/cypress-cucumber-preprocessor')
const TGHtmlElementsPage = require('../../pages/TGHtmlElementsPage')

const tgHtmlElementsPage = new TGHtmlElementsPage()

Given(/^user navigates to "([^"]*)"$/, (url) => {
  cy.visit(url)
})

When(/^user clicks on the "([^"]*)" card$/, (cardName) => {
  cy.contains(cardName).click()
})

Then(/^the URL should contain "([^"]*)"$/, (url) => {
  cy.url().should('contain', url)
})
<<<<<<< HEAD

Then(/^user should see the "([^"]*)" page heading$/, (heading) => {
  tgHtmlElementsPage.getHeading().should('have.text', heading)
})
=======
>>>>>>> f5d286957f2ae68587b655a08958bda83437f3ba
