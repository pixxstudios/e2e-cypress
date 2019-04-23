describe("Testing the home page for automationpractice", () => {
    it("Visits the automationpractice", () => {
        cy.visit("http://automationpractice.com/index.php")
    });

    it("Find the content '0123-456-789'", () => {
        cy.contains('0123-456-789')
    });
});

describe("Test the Sign in / Sign up page", () => {
    it('Should click on sign in link and open the new page', () => {
        it("Open the sign in page", () => {
            cy.contains('Sign in').click()
        })
    })
})