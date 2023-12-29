
import ClaseLogin from "../../Login/login";

class ClaseCobranza {
  static ejecutarPrueba() {
    describe('Prueba', () => {
      before(() => {
        ClaseLogin.ingresoLogin();
      });

      it('COBRANZA', () => {
        cy.get('.p-dialog-header-close-icon').click();
        cy.wait(1000);
        cy.get('.p-inputtext').type('VENTAS');
        cy.wait(1000);
        cy.get('.ng-tns-c62-22.layout-root-menuitem').click();
        cy.wait(1000);
        cy.get('.ng-tns-c62-23.ng-tns-c62-22 > .ng-star-inserted').click();
        cy.wait(1000);
      });
    });
  }
}

export default ClaseCobranza;