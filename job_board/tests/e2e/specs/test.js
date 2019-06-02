
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
    cy.contains('District Judge').click();
    cy.contains('start date in: 30 days');
  });

  it('Displays information about the start date of the Tribunal Member role', () => {
    cy.visit('/');
    cy.contains('Tribunal Member').click();
    cy.contains('start date in: 60 days');
  });

  it('Displays information about the start date of the Adjudicator role', () => {
    cy.visit('/');
    cy.contains('District Judge').click();
    cy.contains('start date in: 65 days');
  });
});

describe('Views the application form', () => {

  it('shows the option for DJ on the selector field', () => {
    cy.visit('/');
    cy.get('select').select('District Judge').contains('District Judge');
  });

  it('shows the option for TM on the selector field', () => {
    cy.visit('/');
    cy.get('select').select('Tribunal Member').contains('Tribunal Member');
  });

  it('shows the option for Adj on the selector field', () => {
    cy.visit('/');
    cy.get('select').select('Adjudicator').contains('Adjudicator');
  });

  it('shows the submit button', () => {
    cy.visit('/');
    cy.get('form').contains('Submit');
  });
});

describe('acknowledges the applicants submission', () => {

  it('shows the email box with applicants choice ', () => {
    cy.visit('/');
    cy.get('input.email').type('fake@email.com').should('have.value', 'fake@email.com');

  });

  it('shows the selector box with applicants choice', () => {
    cy.visit('/');
    cy.get('select').select('Adjudicator').should('have.value', 'Adjudicator');

  });

  it('shows the date box with applicants choice', () => {
    cy.visit('/');
    cy.get('input.date').type('00/00/00').should('have.value', '00/00/00');

  });

});

describe('Shows the applicants submission', () => {

  it('shows the email box with applicants choice ', () => {
    cy.visit('/');
    cy.get('input.email')
      .type('fake@email.com')
      .get('select').select('Adjudicator')
      .get('input.date').type('00/00/00')
      .get('button').click()
    .contains('fake@email.com', 'Adjudicator', '00/00/00');
  });

});
