describe('going between two domains', () => {
  beforeEach(() => {
    cy.visit(`/`)
    Cypress.config('chromeWebSecurity', false)
    Cypress.Cookies.debug(true)
    Cypress.Cookies.defaults({
      preserve: (_cookie) => {
        // implement your own logic here
        // if the function returns truthy
        // then the cookie will not be cleared
        return true
      }
    })
    
  })

  it('renders correctly', () => {

    // get to storefront
    cy.get('ul').within(() => {
      cy.get('li').eq(0).get('a').eq(0).click()
    })

    // get past ad
    cy.closePopup()

    // add to cart, go to cart page
    cy.get('.right-box button.add-to-cart').click()
    cy.get('nav.navbar-default.header').within(() => {
      cy.get('.cart-header a[title="Cart"]')
        .eq(1) // skip the mobile icon, whatever...
        .scrollIntoView()
        .click()
    })
  })
})
