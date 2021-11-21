/// <reference types="cypress" />

context('Login page', () => {
    beforeEach(() => {
      cy.visit('https://sso.zeachable.com/secure/123/identity/login')
    })
  
    describe('Login Tests', () => {
        it('new login access', () => {
          cy.get('#email').type('takehome@test.com')
          cy.get('#password').type('Teachable')
          cy.get('[data-testid=login-button]').click()
          cy.get(':nth-child(1) > .fedora-navbar-link').contains('My Courses')
          cy.get(':nth-child(1) > .fedora-navbar-link').should('have.prop', 'href').and('equal', 'https://takehome.zeachable.com/courses/enrolled')
    })

        it('main page logged', () => {
          cy.get('#email').type('takehome@test.com')
          cy.get('#password').type('Teachable')
          cy.get('[data-testid=login-button]').click()
          cy.get(':nth-child(1) > .fedora-navbar-link').contains('My Courses')
        })
  

  })
})
