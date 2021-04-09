import mockRentalCart from '../fixtures/mock-rental-cart-response.json'
import mockSaleCart from '../fixtures/mock-sale-cart-response.json'

describe('going between two domains', () => {

  it('shows no Response message', () => {
    cy.visit('http://storefront.lrdev/cart', {
    // cy.visit('https://www.lensrentals.com/cart', {
      onBeforeLoad (window) {
        cy.stub(window, 'fetch')
          .withArgs('/cart.json')
          .resolves({
            ok: true,
            json: () => ({ then: () => mockRentalCart })
          })
          .withArgs('/sale_cart.json')
          .resolves({
            ok: true,
            json: () => ({ then: () => mockSaleCart })
          })
      }
    })

    // cy.closePopup()
  
    cy.contains('YERTLE THE TURTLE').should('be.visible')
  })
})
