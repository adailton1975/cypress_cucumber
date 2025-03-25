import {Given, When , Then, And} from 'cypress-cucumber-preprocessor/steps'

Given('Im on the login page', ()=> {
    cy.visit('https://www.automationexercise.com/login')
})

When('I enter valid credentials',()=> {
    cy.get('input[data-qa="login-email"]').type('adailton.1975@gmail.com');
    cy.get('input[data-qa="login-password"]').type('H@hy2+X),N3d');
    cy.get('button[data-qa="login-button"]').click();
})

And('I should be logged in',()=> {
    cy.get('#header > div > div > div > div.col-sm-4 > div')
})

And('I search for a product', () => {
    cy.get('#header > div > div > div > div.col-sm-8 > div > ul > li:nth-child(2) > a').click();
    cy.get('#search_product').type('Men Tshirt');
    cy.get('#submit_search > i').click();
})

And('I add the product in the cart', () => {
    cy.get('i.fa.fa-plus-square').click();
    cy.get('button.btn.btn-default.cart').click();
    
})

Then('I should see the product in the cart', () => {
    cy.get('#cartModal > div > div > div.modal-body > p:nth-child(2) > a > u').click();
    cy.get('#do_action > div.container > div > div > a').click();
    cy.get('tbody ').should('contain.text', 'Men Tshirt');
})