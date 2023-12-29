
class ClaseLogin {
  static ingresoLogin() {
    const user = 'jurina';
    const password = 'Eli96Apo';
    const empresa = 'PROCAMARONEX';

    cy.visit('http://172.16.11.24:7200/guest/sign-in');
    cy.get('#floatingUsername').type(user);
    cy.get('.p-password > .p-inputtext').type(password);
    cy.wait(1000);

    cy.get('#floatingOP > .p-dropdown > .p-dropdown-trigger').click();
    cy.wait(1000);

    cy.get('#floatingOP > .p-dropdown > .p-dropdown-label').type(empresa);
    cy.get('.p-fluid > .text-center').click();
    cy.wait(1000);
  }
}

export default ClaseLogin;

  