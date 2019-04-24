describe("Testing the home page for automationpractice", () => {
    it("Visits the automationpractice", () => {
        cy.visit("http://automationpractice.com/index.php")
    });

    it("Find the content '0123-456-789'", () => {
        cy.contains('0123-456-789')
    });

    it("Find the content 'Call us now'", () => {
        cy.contains('Call us now')
    });
});

describe("Test the search functionality", () => {
    it('Should perform search operation', () => {
        cy.get('input.search_query')
        .type('shirt')

        cy.get('button.button-search')
        .click();

        cy.url()
        .should('include', 'earch_query=shirt')

        cy.get('a.product-name')
        .should('contain', 'Faded Short Sleeve T-shirts')
    })
});

describe("Buy item", () => {
    it("Should add item to cart after search", () => {
    cy.contains('Add to cart')
    .click()
    })
});

/* describe("Test the Sign in / Sign up page", () => {
    it('Should click on sign in link and open the new page', () => {
        it("Open the sign in page", () => {
            cy.contains('Sign in').click()
        })
    })
}) */