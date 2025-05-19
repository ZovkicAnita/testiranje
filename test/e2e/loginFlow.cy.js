describe('E2E Test: Prijava korisnika', () => {
  it('Neuspješna prijava s krivim podacima', () => {
  cy.visit('http://localhost:3000');

  cy.get('[data-testid="username-input"]').clear().type('admin1'); // nepostojeći user
  cy.get('[data-testid="password-input"]').clear().type('pogresna');
  cy.get('button').contains('Login').click();

  cy.contains('Invalid username or password', { timeout: 10000 }).should('be.visible');

  cy.url().should('not.include', '/dashboard');
});



  it('Uspješna prijava s ispravnim podacima', () => {
  cy.visit('http://localhost:3000');

  cy.get('[data-testid="username-input"]').clear().type('admin');
  cy.get('[data-testid="password-input"]').clear().type('adminPass');
  cy.get('button').contains('Login').click();

  cy.location('pathname', { timeout: 10000 }).should('include', '/dashboard');

  // Provjera da dashboard postoji
  cy.contains('Dashboard', { timeout: 10000 }).should('exist');
});

});

