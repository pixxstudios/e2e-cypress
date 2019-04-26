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
    it("View more details of the item", () => {
        cy.get('ul.product_list > li')
        .click()
        .contains('More')
        .click()
    })

    it('Check for product details and price', () => {
        cy.contains('Faded Short Sleeve T-shirts')
        cy.contains('Model')
        cy.contains('demo_1')
        cy.contains('Condition')
        cy.contains('New')
        cy.contains("Faded short sleeve t-shirt with high neckline. Soft and stretchy material for a comfortable fit. Accessorize with a straw hat and you're ready for summer!")
        cy.contains('$16.51')
    })

    it('Try changing the quantity', () => {
        cy.contains('Quantity');

        cy.get('input#quantity_wanted').as('qty');
        cy.get('@qty').should('have.value', '1');

        cy.get('a.button-plus').click();
        cy.get('@qty').should('have.value', '2');

        cy.get('a.button-minus').click();
        cy.get('@qty').should('have.value', '1');
    })

    it("Search for social links", () => {
        cy.contains('Tweet')
        cy.contains('Share')
        cy.contains('Google+')
        cy.contains('Pinterest')
    })

    it("Search email and print links", () => {
        cy.contains('Send to a friend')
        cy.contains('Print')
    })

    it("Should add item to cart after search", () => {
        cy.contains('Add to cart')
        .click()
    })

    /* it("open cart", () => {
        cy.get('div.shopping_cart > a')
        .click()
    }) */
});

/* describe("Test the Sign in / Sign up page", () => {
    it('Should click on sign in link and open the new page', () => {
        it("Open the sign in page", () => {
            cy.contains('Sign in').click()
        })
    })
}) */