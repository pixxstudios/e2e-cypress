describe("Women section", () => {
    before(() => {
        cy.visit("http://automationpractice.com/index.php")
    });
    
    it("should open the women tab", () => {
        cy.get('ul.sf-menu li')
        .eq(0)
        .click();

        cy.url()
        .should('include', 'id_category=3');
    });

    it('should have 2 subcategories', () => {
        cy.get('div#subcategories ul > li')
        .should('have.length', '2');
    });

    it('should check for first item in the list', () => {
        cy.get('ul.product_list > li')
        .eq(0)
        .contains('Faded Short Sleeve T-shirts');
    });

    it('sort by name and check first item', () => {
        cy.get('select#selectProductSort')
        .select('name:asc');
    })
})