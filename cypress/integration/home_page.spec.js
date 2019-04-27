describe("Testing the home page for automationpractice", () => {
    before(() => {
        cy.visit("http://automationpractice.com/index.php")
    });

    it("Check the contact us", () => {
        cy.get('span.shop-phone').as('shopPhone');

        cy.get('@shopPhone')
        .contains('Call us now');

        cy.get('@shopPhone').within(() => {
            cy.get('strong')
            .contains('0123-456-789');
        })
    });

    it("Find the content 'Contact us'", () => {
        cy.get('div#contact-link > a')
        .contains('Contact us')
        .should('have.attr', 'href', 'http://automationpractice.com/index.php?controller=contact')
        .and('have.attr' ,'title', 'Contact Us')
    });

    it("Find the content 'Sign in'", () => {
        cy.contains('Sign in');
    });

    it("Test the logo", () => {
        cy.get('div#header_logo > a').as('logo');

        cy.get('@logo')
        .should('have.attr', 'href', 'http://automationpractice.com/')
        .and('have.attr', 'title', 'My Store')
    })
});