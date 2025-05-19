describe('E2E Test: Dodavanje zahtjeva za refundaciju', () => {
  it('Uspješan unos zahtjeva', () => {
    cy.visit('http://localhost:3000');

    // Prijava
    cy.get('[data-testid="username-input"]').type('admin');
    cy.get('[data-testid="password-input"]').type('adminPass');
    cy.get('button').contains('Login').click();

    cy.url().should('include', '/dashboard');
    cy.contains('Add Reimbursement').click();

    cy.url().should('include', '/add-reimbursement');
    cy.get('textarea').should('exist');

    // Ispunjavanje obrasca
    cy.get('textarea').type('Putni trošak za konferenciju u Rijeci');
    cy.get('select').select('Business Expenses');
    cy.get('input[type="number"]').type('50');

    cy.get('button').contains('Submit').click();

    cy.contains('Reimbursement added successfully!', { timeout: 10000 }).should('be.visible');
  });
});

describe('E2E Test: Dodavanje zahtjeva za refundaciju', () => {
  it('Neuspješan unos zbog prekratkog opisa', () => {
    cy.visit('http://localhost:3000');

    cy.get('[data-testid="username-input"]').type('admin');
    cy.get('[data-testid="password-input"]').type('adminPass');
    cy.get('button').contains('Login').click();

    cy.url().should('include', '/dashboard');
    cy.contains('Add Reimbursement').click();

    cy.url().should('include', '/add-reimbursement');
    cy.get('textarea').should('exist');

    // Ispunjavanje obrasca s prekratkim opisom
    cy.get('textarea').type('gg');
    cy.get('select').select('Auto Mileage');
    cy.get('input[type="number"]').type('7');

    cy.get('button').contains('Submit').click();

    // Poruka o grešci
    cy.contains('Description must be between 5 and 200 characters', { timeout: 10000 }).should('be.visible');
  });
});


