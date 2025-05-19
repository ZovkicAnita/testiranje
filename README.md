# Sustav za refundaciju troškova

Projekt izrađen za kolegij Testiranje programskih rješenja.

## Pokretanje aplikacije

cd backend  
npm install  
npm start

(novi terminal)

cd frontend  
npm install  
npm start

Aplikacija se otvara na http://localhost:3000  
Backend na http://localhost:3001

## Pokretanje testova

npx cypress open

cd backend  
npm test

## Testovi

loginFlow.cy.js – test uspješne i neuspješne prijave  
addReimbursement.cy.js – test uspješnog i neuspješnog dodavanja zahtjeva  
searchReimbursement.cy.js – test pretrage refundacija  
auth.spec.js – API test prijave  
login.test.js – unit test prijave

## Testni plan

Datoteka: Testni plan - Testiranje programskih rješenja.docx (nalazi se u mapi test/)

## Prijava

Korisničko ime: admin  
Lozinka: adminPass
