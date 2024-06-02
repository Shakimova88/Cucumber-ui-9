const { Then, When } = require("@badeball/cypress-cucumber-preprocessor");
const TGHtmlElementsPage = require("../../../pages/TGHtmlElementsPage");

const tgHtmlElementsPage = new TGHtmlElementsPage();

Then(/^user should see the "([^"]*)" page heading$/, (args1) => {
  console.log(args1);
  return true;
});

When(/^user clicks on the "([^"]*)" button$/, (label) => {
  tgHtmlElementsPage.clickButtonByText(label);
});

Then(/^the text under it should be "([^"]*)"$/, (message) => {
  tgHtmlElementsPage.getButtonMessage().should('have.text', message);
});