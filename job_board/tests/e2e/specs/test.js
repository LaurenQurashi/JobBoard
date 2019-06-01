// https://docs.cypress.io/api/introduction/api.html

// describe('My First Test', () => {
//   it('Visits the app root url', () => {
//     cy.visit('/');
//     cy.contains('h1', 'Hello Lauren!');
//   });
// });

describe('Views the Jobs Board page', () => {

  it('Displays the title of the JB', () => {
    cy.visit('/');
    cy.contains('Judicial Appointments Commission');
  });

  it('Displays information about the District Judge role', () => {
    cy.visit('/');
    cy.contains('District Judge');
  });

  it('Displays information about the Tribunal Member role', () => {
    cy.visit('/');
    cy.contains('Tribunal Member');
  });

  it('Displays information about the Adjudicator role', () => {
    cy.visit('/');
    cy.contains('Adjudicator');
  });

  it('Displays information about the start date of the District Judge role', () => {
    cy.visit('/');
    cy.contains('District Judge').click()
    cy.contains('start date in: 30 days')
  });

  it('Displays information about the start date of the Tribunal Member role', () => {
    cy.visit('/');
    cy.contains('Tribunal Member').click()
    cy.contains('start date in: 60 days')
  });

  it('Displays information about the start date of the Adjudicator role', () => {
    cy.visit('/');
    cy.contains('District Judge').click()
    cy.contains('start date in: 65 days')
  });
});

describe('Views the application form', () => {

  it('shows the email field', () => {
    cy.visit('/');
    cy.get('form').contains('email')
  });

  it('shows the options selector field', () => {
    cy.visit('/');
    cy.get('select').select('District Judge').contains('District Judge')
  });

  it('shows the options selector field', () => {
    cy.visit('/');
    cy.get('select').select('District Judge').contains('District Judge')
  });

  it('shows the options selector field', () => {
    cy.visit('/');
    cy.get('select').select('Tribunal Member').contains('Tribunal Member')
  });

  it('shows the options selector field', () => {
    cy.visit('/');
    cy.get('select').select('Adjudicator').contains('Adjudicator')
  });

  it('shows the submit button', () => {
    cy.visit('/');
    cy.get('form').contains('Submit')
  });

});
