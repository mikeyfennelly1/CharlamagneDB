describe('The Home Page', () => {
    it('successfully loads', () => {
        cy.visit('/')
        cy.get('[data-cy="try"]').click({force: true})
    })
})