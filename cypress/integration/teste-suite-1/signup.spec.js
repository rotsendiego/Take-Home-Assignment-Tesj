/// <reference types="cypress" />

context('Sign Up Test', () => {
  beforeEach(() => {
    cy.visit('https://takehome.zeachable.com')
  })

  describe('trying sign', () => {
      it('trying sign up email in use', () => {
        cy.get('#header-sign-up-btn').click()
        //cy.get('.heading3').should('be.a','Sign Up')
        cy.get('#user_name').type('Joao Lira')
        cy.get('#user_email').type('teste@test.com')
        cy.get('#password').type('123456')
        cy.get('#allow_marketing_emails').click()
        cy.get('#allow_marketing_emails').not('[disabled]')
        .check().should('be.checked')

        cy.get('[data-testid=signup-button]').click()
        //cy.get('.m-l-3-xs').contains('Please confirm your email ')
        cy.get('.bodySmall').contains('Email is already in use.')
        
      })   

      it('sign up missing email and password r', () => {
        cy.get('#header-sign-up-btn').click()
        //cy.get('.[data-layer="Content"]').contains('Sign Up')
        cy.get('#user_name').type('Joao Lira')
        cy.get('#user_email').click()
        cy.get('#password').click()
        cy.get('#allow_marketing_emails').click()
        cy.get('#allow_marketing_emails').not('[disabled]')
        .check().should('be.checked')

        cy.get('[data-testid=signup-button]').click()
        //cy.get('.m-l-3-xs').contains('Please confirm your email ')
        cy.get('ul > :nth-child(1)').contains('Email is required')
        cy.get('ul > :nth-child(2)').contains('Password is required')
        
      }) 
      
      it('missing name, email and password r', () => {

        cy.get('#header-sign-up-btn').click()
        //cy.get('.heading3').should('be.a','Sign Up')
        cy.get('[data-testid=signup-button]').click()
        cy.get('ul > :nth-child(1)').contains('Name is required')
        cy.get('ul > :nth-child(2)').contains('Email is required')
        cy.get('ul > :nth-child(3)').contains('Password is required')
        
      }) 
  })
})

