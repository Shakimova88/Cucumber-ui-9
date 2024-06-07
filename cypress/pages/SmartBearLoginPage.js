class SmartBearLoginPage {
  getUserName() {
    cy.get('#ctl00_MainContent_username')
  }

  getPassword() {
    cy.get('#ctl00_MainContent_password')
  }

  getLoginButton() {
    cy.get('#ctl00_MainContent_login_button')
  }

  getInvalidLoginMessage() {
    cy.get('#ctl00_MainContent_status')
  }

  // Method
  clickLoginButton() {
    this.getLoginButton().click()
  }
}

module.exports = SmartBearLoginPage
