describe('E2E Test: Pretraga zahtjeva za refundaciju', () => {
  it('Pretraga po opisu refundacije', () => {
    // Posjet aplikaciji i prijava
    cy.visit('http://localhost:3000');
    cy.get('[data-testid="username-input"]').type('admin');
    cy.get('[data-testid="password-input"]').type('adminPass');
    cy.get('button').contains('Login').click();

    // Provjera da je korisnik uspješno preusmjeren na dashboard
    cy.url({ timeout: 10000 }).should('include', '/dashboard');

    // Unos pojma za pretragu
    cy.get('input[placeholder="Search reimbursements..."]').type('konferenciju u Rijeci');

    // Provjera da se prikazuje očekivani rezultat
    cy.contains('Putni trošak za konferenciju u Rijeci').should('exist');
  });
});
