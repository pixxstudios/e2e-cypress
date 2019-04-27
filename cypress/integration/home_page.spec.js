describe("Testing the home page for automationpractice", () => {
    before(() => {
        cy.visit("http://automationpractice.com/index.php")
    });

    it("Find the content '0123-456-789'", () => {
        cy.contains('0123-456-789')
    });

    it("Find the content 'Call us now'", () => {
        cy.contains('Call us now')
    });
});