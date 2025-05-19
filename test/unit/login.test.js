// Jednostavni test koji provjerava validaciju lozinke

function isPasswordValid(password) {
  return typeof password === 'string' && password.length >= 6;
}

describe('Validacija lozinke', () => {
  test('Lozinka dulja od 6 znakova je ispravna', () => {
    expect(isPasswordValid('adminPass')).toBe(true);
  });

  test('Lozinka kraća od 6 znakova je neispravna', () => {
    expect(isPasswordValid('123')).toBe(false);
  });
});

  