describe("Testing the home page for automationpractice", () => {
    before(() => {
        cy.visit("http://automationpractice.com/index.php")
    });

    it('check for image in the header', () => {
        cy.get('div.banner img')
        .should('have.attr', 'src' ,'http://automationpractice.com/modules/blockbanner/img/sale70.png');
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
        .and('have.attr' ,'title', 'Contact Us');
    });

    it("Find the content 'Sign in'", () => {
        cy.get('div.header_user_info > a')
        .contains('Sign in')
        .should('have.attr', 'href', 'http://automationpractice.com/index.php?controller=my-account')
        .and('have.attr' ,'title', 'Log in to your customer account');
    });

    it('homepage slider should have 5 images', () => {
        cy.get('div#homepage-slider ul > li')
        .should('have.length', '5');
    })

    it('homepage slider description', () => {
        cy.get('div#homepage-slider ul > li').eq(0).as('listItem');
        
        cy.get('@listItem').within(() => {
            cy.get('a')
            .should('have.attr', 'href', 'http://www.prestashop.com/?utm_source=v16_homeslider')
            
            cy.contains('div.homeslider-description h2', 'EXCEPTEUR');

            cy.contains('div.homeslider-description p:first',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tristique in tortor et dignissim. Quisque non tempor leo. Maecenas egestas sem elit');
        })
    })

    it("Test the logo", () => {
        cy.get('div#header_logo > a').as('logo');

        cy.get('@logo')
        .should('have.attr', 'href', 'http://automationpractice.com/')
        .and('have.attr', 'title', 'My Store')
    });
});