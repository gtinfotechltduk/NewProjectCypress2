describe('Home', () => {

    beforeEach(() => {
        cy.visit('/')
    })


    it('Navigate to my web page and checking the tittle ', () => {
        cy.title().should('eq', 'DEMOQA')

    });

    it('Should click the one card box', () => {

        cy.get('.card-body').contains('Widgets').click()

    });

    it('checking Book Store Application text appear', () => {

        cy.get('.card-body').contains('Book Store Application').as('BookStore')
        cy.get('@BookStore').should('be.visible')
        cy.get('@BookStore').click()
        cy.get('#login').should('be.visible')
        cy.get('#login').should('have.css', 'background-color', 'rgb(0, 123, 255)')

    });

    it('checking the elements and text box,background color and submit button', () => {

        cy.get('.card-body').contains('Elements').click()
        cy.get('#item-0').click()
        //cy.get('.text-center').contains('Text Box').should('be.visible')
        cy.get('.text-center').should('have.text', 'Text Box')
        cy.get('#submit').should('have.css', 'background-color', 'rgb(0, 123, 255)')
    });

    it.only('visit check box page directly and checking the background color ', () => {

        cy.visit('/checkbox')
        cy.get('.text-center').contains('Check Box').should('be.visible')
        cy.get('[title="Toggle"]').click();

    });


    it('visit radio button page  and select yes', () => {

        cy.visit('/radio-button')
        cy.get('.text-center').contains('Radio Button').should('be.visible')
        // cy.get('#yesRadio').click();
        cy.get('label[for="yesRadio"]').click();
        cy.get('.text-success').should('have.text', 'Yes')

    });


    it('visit buttons page directly', () => {

        cy.visit('/buttons')

    });

    it('visit links page directly', () => {

        cy.visit('/links')

    });

    it('visit links page directly', () => {

        cy.visit('/links')

    });


    it('visit upload-download directly', () => {

        cy.visit('/upload-download')

    });




})

