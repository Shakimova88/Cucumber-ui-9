import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
const SmartBearLoginPage = require('../../../pages/SmartBearLoginPage')
const SmartBearOrderPage = require('../../../pages/SmartBearOrderPage')
const SmartBearLogoutPage = require('../../../pages/SmartBearLogoutPage')

const smartBearLoginPage = new SmartBearLoginPage()
const smartBearOrderPage = new SmartBearOrderPage()
const smartBearLogoutPage = new SmartBearLogoutPage()

Given(/^user is on "([^"]*)"$/, (url) => {
  cy.visit(url)
})

When(/^user enters username as "([^"]*)"$/, (username) => {
  smartBearLoginPage.getUserName().type(username)
})

When(/^user enters password as "([^"]*)"$/, (password) => {
  smartBearLoginPage.getPassword().type(password)
})

When(/^user clicks on "Login" button$/, () => {
  smartBearLoginPage.clickLoginButton()
})

Then(/^user should see "([^"]*)" message$/, (message) => {
  smartBearLoginPage.getInvalidLoginMessage().should('have.text', message)
})

Then(/^user should be routed to "([^"]*)"$/, (expectedUrl) => {
  cy.url().should('eq', expectedUrl)
})

Then(/^validate below menu items are displayed$/, (dataTable) => {
  const menuItems = dataTable.rawTable.map((item) => item[0])
  menuItems.forEach((item) => {
    cy.contains(item).should('be.visible')
  })
})

When(/^user clicks on "Check All" button$/, () => {
  cy.get('#ctl00_MainContent_btnCheckAll').click()
})

Then(/^all rows should be checked$/, () => {
  cy.get('input[type="checkbox"]').each(($el) => {
    cy.wrap($el).should('be.checked')
  })
})

When(/^user clicks on "Uncheck All" button$/, () => {
  cy.get('#ctl00_MainContent_btnUncheckAll').click()
})

Then(/^all rows should be unchecked$/, () => {
  cy.get('input[type="checkbox"]').each(($el) => {
    cy.wrap($el).should('not.be.checked')
  })
})

When(/^user clicks on "Delete Selected" button$/, () => {
  cy.get('#ctl00_MainContent_btnDelete').click()
})

Then(/^validate all orders are deleted from the List of All Orders$/, () => {
  cy.contains('List of orders is empty. In order to add new order use this link.').should('be.visible')
})

Then(/^validate user sees "([^"]*)" message$/, (message) => {
  cy.contains(message).should('be.visible')
})

When(/^user clicks on "Order" menu item$/, () => {
  smartBearOrderPage.clickOrderMenuItem()
})

When(/^user enters all product information$/, () => {
  smartBearOrderPage.selectProduct('ScreenSaver')
  smartBearOrderPage.enterQuantity('5')
})

When(/^user enters all address information$/, () => {
  smartBearOrderPage.enterCustomerName('John Doe')
  smartBearOrderPage.enterStreet('123 Main St')
  smartBearOrderPage.enterCity('Chicago')
  smartBearOrderPage.enterState('IL')
  smartBearOrderPage.enterZip('12345')
})

When(/^user enters all payment information$/, () => {
  smartBearOrderPage.selectCardType('Visa')
  smartBearOrderPage.enterCardNumber('1234567891011')
  smartBearOrderPage.enterExpirationDate('12/25')
})

When(/^user clicks on "Process" button$/, () => {
  smartBearOrderPage.clickProcessButton()
})

When(/^user clicks on "View all orders" menu item$/, () => {
  smartBearOrderPage.clickViewAllOrdersMenuItem()
})

Then(/^validate all information entered displayed correct with the order$/, () => {
  smartBearOrderPage.validateOrderDetails({
    customerName: 'John Doe',
    product: 'ScreenSaver',
    quantity: '5',
    date: '06/07/2024', // Adjusting to match the actual displayed date
    street: '123 Main St',
    city: 'Chicago',
    state: 'IL',
    zip: '12345',
    cardType: 'Visa',
    cardNumber: '1234567891011',
    expiration: '12/25',
  })
})
