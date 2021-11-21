/// <reference types="cypress" />

context('Home Test', () => {
    beforeEach(() => {
      cy.visit('https://takehome.zeachable.com')
    })
  
    describe('Check Basic Info LandingPage', () => {
        it('Check Home title', () => {
          cy.get('.headline').contains('Welcome to takehome')
        })
  
        it('Check and Click Btn', () => {
          cy.contains('Enroll Now').click()
      })

        it('Check Logo Header', () => {
          cy.get('*[class^="school-title navbar-brand"]')
          .contains('takehome')
          .click()
          
    })
  })
})
