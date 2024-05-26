
/// <reference types="cypress" />

const CPF = '320.100.318-22'
describe ('Senha', () => {
    
    it ('Esqueceu a senha', () => {
        cy.visit('/')
            .get('.title')
            .should('be.visible')
            .contains('Login')
            .should('be.visible')
        cy.get('.options .v-button')
            .should('be.visible')
            .click()
        cy.get('.radio-group input[type="radio"][name="cpf"]')
            .check({force: true})
            .should('be.checked')
        cy.get('input[placeholder="Digite o CPF cadastrado no SIGMA"]')
            .type(CPF)
        cy.get('[data-test="submit-btn"]')
            .should('be.visible')
            .click();
        cy.get('.message')
           .should('contain', 'Enviamos instruções de redefinição de senha para o e-mail cadastrado.');
    })
})