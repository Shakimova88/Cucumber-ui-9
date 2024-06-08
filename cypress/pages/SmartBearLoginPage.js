class SmartBearLoginPage {
  getUserName() {
    return cy.get('#ctl00_MainContent_username')
  }

  getPassword() {
    return cy.get('#ctl00_MainContent_password')
  }

  getLoginButton() {
    return cy.get('#ctl00_MainContent_login_button')
  }

  getInvalidLoginMessage() {
    return cy.get('#ctl00_MainContent_status')
  }

  // Method
  clickLoginButton() {
    this.getLoginButton().click()
  }
}

module.exports = SmartBearLoginPage
