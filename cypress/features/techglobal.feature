Feature: Interaction with TechGlobal HtmlElements page

  Scenario: Validate HTML elements card, Register and Sign in Buttons
    Given user navigates to "https://techglobal-training.com/frontend/"
    When user clicks on the "Html Elements" card
    Then user should see the "Html Elements" page heading
    Then the URL should contain "elements"
    When user clicks on the "Register" button
    Then the text under it should be "You clicked on “Register”"
    When user clicks on the "Sign in" button
    Then the text under it should be "You clicked on “Sign in”"