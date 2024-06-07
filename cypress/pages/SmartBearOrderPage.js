class SmartBearOrderPage {
  getOrderMenuItem() {
    cy.get('#ctl00_menu a[href="Process.aspx"]')
  }

  getProductDropdown() {
    cy.get('#ctl00_MainContent_fmwOrder_ddlProduct')
  }

  getQuantity() {
    cy.get('#ctl00_MainContent_fmwOrder_txtQuantity')
  }

  getCustomerName() {
    cy.get('#ctl00_MainContent_fmwOrder_txtName')
  }

  getStreet() {
    cy.get('#ctl00_MainContent_fmwOrder_TextBox2')
  }

  getCity() {
    cy.get('#ctl00_MainContent_fmwOrder_TextBox3')
  }

  getState() {
    cy.get('#ctl00_MainContent_fmwOrder_TextBox4')
  }

  getZip() {
    cy.get('#ctl00_MainContent_fmwOrder_TextBox5')
  }

  getCardType(cardType) {
    cy.get(`#ctl00_MainContent_fmwOrder_cardList_0`)
  }

  getCardNumber() {
    cy.get('#ctl00_MainContent_fmwOrder_TextBox6')
  }

  getExpirationDate() {
    cy.get('#ctl00_MainContent_fmwOrder_TextBox1')
  }

  getProcessButton() {
    cy.get('#ctl00_MainContent_fmwOrder_InsertButton')
  }

  getViewAllOrdersMenuItem() {
    cy.get('#ctl00_menu a[href="Default.aspx"]')
  }

  getOrderGrid() {
    cy.get('#ctl00_MainContent_orderGrid')
  }

  // Methods
  clickOrderMenuItem() {
    this.getOrderMenuItem().click()
  }

  selectProduct(product) {
    this.getProductDropdown().select(product)
  }

  enterQuantity(quantity) {
    this.getQuantity().type(quantity)
  }

  enterCustomerName(name) {
    this.getCustomerName().type(name)
  }

  enterStreet(street) {
    this.getStreet().type(street)
  }

  enterCity(city) {
    this.getCity().type(city)
  }

  enterState(state) {
    this.getState().type(state)
  }

  enterZip(zip) {
    this.getZip().type(zip)
  }

  selectCardType(cardType) {
    this.getCardType(cardType).click()
  }

  enterCardNumber(cardNumber) {
    this.getCardNumber().type(cardNumber)
  }

  enterExpirationDate(expirationDate) {
    this.getExpirationDate().type(expirationDate)
  }

  clickProcessButton() {
    this.getProcessButton().click()
  }

  clickViewAllOrdersMenuItem() {
    this.getViewAllOrdersMenuItem().click()
  }

  validateOrderDetails(orderDetails) {
    this.getOrderGrid()
      .contains('tr', orderDetails.customerName)
      .within(() => {
        cy.get('td').eq(1).should('have.text', orderDetails.customerName)
        cy.get('td').eq(2).should('have.text', orderDetails.product)
        cy.get('td').eq(3).should('have.text', orderDetails.quantity)
        cy.get('td').eq(4).should('have.text', orderDetails.date)
        cy.get('td').eq(5).should('have.text', orderDetails.street)
        cy.get('td').eq(6).should('have.text', orderDetails.city)
        cy.get('td').eq(7).should('have.text', orderDetails.state)
        cy.get('td').eq(8).should('have.text', orderDetails.zip)
        cy.get('td').eq(9).should('have.text', orderDetails.cardType)
        cy.get('td').eq(10).should('have.text', orderDetails.cardNumber)
        cy.get('td').eq(11).should('have.text', orderDetails.expiration)
      })
  }
}

module.exports = SmartBearOrderPage
