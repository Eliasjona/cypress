import ClaseLogin from "../../Login/login";

class ClaseRecaudaciones {
  static realizarPrueba() {
  
    const idmodule = prompt('Ingrese el nombre del módulo a probar (por ejemplo, VENTAS):');
    const FechaInicio = '2023-12-28';
    const FechaFin = '2023-12-28';
    
    

    describe('RECAUDACIONES', () => {
      before(() => {
        ClaseLogin.ingresoLogin();
      
      });

      it('Ingresa Recaudaciones', () => {
        ClaseRecaudaciones.ingresarRecaudaciones();
      });

      it('Registrar Recaudacion', () => {
        ClaseRecaudaciones.Registrorecaudacion();
      });

      it('Editar recaudacion existente', () => {
        ClaseRecaudaciones.EditarRecaudacion();
      }); 
    });
    
  }

  static ingresarRecaudaciones(){
    const idmodule = prompt('Ingrese el nombre del módulo a probar (por ejemplo, VENTAS):')
    if (idmodule) {
      cy.get('.p-inputtext').eq(0).type(idmodule);
      cy.wait(1000);
      cy.get('.ng-tns-c62-21.layout-root-menuitem > .layout-menuitem-root-text').should('be.visible').click();
      cy.wait(1000);
      cy.get('.ng-tns-c62-23.ng-tns-c62-21 > .ng-star-inserted').click();
      cy.wait(1000);
      cy.get('[ptooltip="New Register"] > .p-ripple', { timeout: 10000 }).click();
      cy.wait(1000);
    } else {
      console.error('Debe ingresar un nombre de módulo válido.');
    }
  }

  static Registrorecaudacion(){
    const idfecha = '2023-12-29';
    const idcompra = '5';
    const Idmonto = '50000';
    const idbanco = 'BANCO INTERNACIONAL';
   
    
    cy.get('.p-calendar.ng-tns-c89-200 input').type(idfecha, { force: true }).type('{enter}', { force: true });
    cy.get('#floatingNcompra').type(idcompra);
    cy.get('.p-inputnumber > .p-inputtext').type(Idmonto);
    cy.get('.p-fluid > :nth-child(4)').click();
    cy.get('.p-dropdown-filter').type(idbanco);
    cy.get('#pr_id_6_list > .p-element.ng-star-inserted > .p-ripple').click();
    cy.wait(1000);
    cy.get('.p-dialog-footer > .p-element.ng-star-inserted').click();
    cy.wait(1000);
  }

  static EditarRecaudacion(){
    const fecha2 = '2023-12-29';
    const N_Compra = '10';
    const Monto = '25000';
    const banco = 'GUAYAQUIL';

    cy.get(':nth-child(1) > .cdk-column-Actions > .mat-focus-indicator').click();
    cy.wait(1000);
    cy.get('.mat-menu-content > :nth-child(2)').click();
    cy.wait(1000);
    cy.get('#floatingFecha > .p-calendar > .p-inputtext').clear().type(fecha2).type('{enter}');
    cy.wait(1000);
    cy.get('#floatingNcompra').clear().type(N_Compra);
    cy.wait(1000);
    cy.get('.p-inputnumber > .p-inputtext').clear().type(Monto);
    cy.wait(1000);
    cy.get('.p-fluid > :nth-child(4)').click();
    cy.wait(1000);
    cy.get('.p-dropdown-filter').type(banco);
    cy.get('#pr_id_12_list > .p-element.ng-star-inserted > .p-ripple').click();
    cy.wait(1000);
    cy.get('.p-dialog-footer > .p-element.ng-star-inserted > .p-ripple').click();
    cy.wait(2000);
  }
}

export default ClaseRecaudaciones;
