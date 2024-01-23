
import ClaseLogin from "../Login/login";

class ClaseCobranza {
  static realizarPruebaCobranza() {
    const idbusqueda = 'VENTAS';

    describe('Prueba de Cobranza', () => {
      before(() => {
        // Descomenta esta sección si necesitas iniciar sesión antes de la prueba
        // ClaseLogin.ingresoLogin();
      });

      it('Realizar búsqueda y navegar', () => {
        if (idbusqueda) {
          cy.get('.p-inputtext').eq(0).type(idbusqueda);
          cy.contains('.ng-tns-c62-11.layout-root-menuitem > .layout-menuitem-root-text', idbusqueda).click();
        } else {
          cy.log('El Módulo no existe');
        }

        
        cy.get('.ng-tns-c62-12.ng-tns-c62-11 > .ng-star-inserted').should('exist').click();
        cy.get('.layout-menu-button').click();
      });
    });
  }
}

export default ClaseCobranza;
