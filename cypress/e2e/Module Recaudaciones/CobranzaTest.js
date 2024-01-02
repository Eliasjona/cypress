
import ClaseLogin from "../../Login/login";

class ClaseCobranza {
  static ejecutarPrueba() {
  
  const idbusqueda = 'VENTAS'
  
    describe('Prueba', () => {
      before(() => {
        ClaseLogin.ingresoLogin();
      });

      it('COBRANZA', () => {
        cy.get('.p-inputtext').eq(0).type(idbusqueda);
        cy.wait(1000);
        cy.get('.ng-tns-c62-21.layout-root-menuitem > .layout-menuitem-root-text').click();
        cy.wait(1000);
        cy.get('.ng-tns-c62-22.ng-tns-c62-21 > .ng-star-inserted').click();
        cy.wait(1000);
        cy.get('.layout-menu-button').click()
        cy.wait(1000);
      });
    });
  }
}

export default ClaseCobranza;