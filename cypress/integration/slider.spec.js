describe('Slider Testing', () => {
    it('should pick value from slider', () => {
        cy.visit('https://devexpress.github.io/testcafe/example/')
        cy.get('#tried-test-cafe').click()
        cy.contains('5').click()
    });
});