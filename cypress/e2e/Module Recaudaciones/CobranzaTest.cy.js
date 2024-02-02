
class ClaseCobranza {
  static realizarPruebaCobranza() {
    
    const idbusqueda = 'VENTAS';

    describe('Prueba de Cobranza', () => {
     

      it('Otra prueba que utiliza la interfaz capturada', () => {
        // Acceder a la interfaz HTML capturada en la prueba anterior
        cy.get('@interfazHTML').then((interfazHTML) => {
          // Hacer algo con la interfaz HTML, como aserciones o interacciones adicionales
          cy.log('Interfaz HTML en la segunda prueba:', interfazHTML);
        });
      });

      it('Ingresa Recaudaciones', () => {
        ClaseRecaudaciones.ingresarRecaudaciones();
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
  };
  
}
export default ClaseCobranza;
