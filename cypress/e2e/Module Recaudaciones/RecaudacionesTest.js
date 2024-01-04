import ClaseLogin from "../../Login/login";

class ClaseRecaudaciones {
  static realizarPrueba() {
  
    describe('RECAUDACIONES', () => {
      before(() => {
        ClaseLogin.ingresoLogin();
      
      });

      it('Ingresa Recaudaciones', () => {
        ClaseRecaudaciones.ingresarRecaudaciones();
      });

    //   it('Registrar Recaudacion', () => {
    //     ClaseRecaudaciones.Registrorecaudacion();
    //   });

    //   it('Editar recaudacion existente', () => {
    //     ClaseRecaudaciones.EditarRecaudacion();
    //   }); 
     });
    
  }

  static ingresarRecaudaciones(){
    const idmodule = prompt('Ingrese el nombre del módulo a probar (por ejemplo, VENTAS):')
    
    if (idmodule) {
      cy.get('.p-inputtext').eq(0).type(idmodule);
      cy.wait(1000);
     // Busca un elemento padre (por ejemplo, <a>) que contenga el texto "ventas"
      cy.contains('a','VENTAS').then(($element) => {
        // Ahora $element contiene el <a> padre que contiene "ventas"
        
        // Busca el elemento <span> dentro de $element que tiene el texto "ventas"
        cy.wrap($element).as('myElement');
        cy.get('@myElement').find('span').should('contain.text', 'VENTAS')
        // Realiza cualquier otra interacción necesaria con el elemento "ventas"
        // Por ejemplo, hacer clic en él:
        cy.wrap($element).click({force: true});
      });

      cy.wait(3000); 
      cy.contains('.layout-menuitem-text', 'RECAUDACIONES').click();

      cy.wait(1000);
      
    } else {
      console.error('Debe ingresar un nombre de módulo válido.');
    }
  }

  // static Registrorecaudacion(){
  //   const idfecha = prompt ('ingresar fecha')
  //   const idcompra = prompt ('ingresa el numero de compra');
  //   const Idmonto = prompt ('ingresa el monto')
  //   const idbanco = prompt ('ingresar el banco');
   
  //   if (idfecha){
  //     cy.visit('http://172.16.11.24:7200/gds/mf-ventas/recaudaciones')
  //     cy.get('[ptooltip="New Register"] > .p-ripple', { timeout: 10000 }).click();
  //     cy.wait(1000);
  //     cy.get('#floatingNcompra').type(idcompra);
  //     cy.get('#floatingFecha').type(idfecha, { force: true }).type('{enter}', { force: true });

  //     cy.get('.p-inputnumber > .p-inputtext').type(Idmonto);
  //     cy.get('.p-fluid > :nth-child(4)').click();
  //     cy.get('.p-dropdown-filter').type(idbanco);
  //     cy.get('#pr_id_6_list > .p-element.ng-star-inserted > .p-ripple').click();
  //     cy.wait(1000);
  //     cy.get('.p-dialog-footer > .p-element.ng-star-inserted').click();
  //     cy.wait(1000);
  // } else {
  //   console.error('Debe ingresar los Valores correspondientes')
  // }
  // }

  // static EditarRecaudacion(){
  //   const fecha2 = '2023-12-29';
  //   const N_Compra = '10';
  //   const Monto = '25000';
  //   const banco = 'GUAYAQUIL';

  //   cy.get(':nth-child(1) > .cdk-column-Actions > .mat-focus-indicator').click();
  //   cy.wait(1000);
  //   cy.get('.mat-menu-content > :nth-child(2)').click();
  //   cy.wait(1000);
  //   cy.get('#floatingFecha > .p-calendar > .p-inputtext').clear().type(fecha2).type('{enter}');
  //   cy.wait(1000);
  //   cy.get('#floatingNcompra').clear().type(N_Compra);
  //   cy.wait(1000);
  //   cy.get('.p-inputnumber > .p-inputtext').clear().type(Monto);
  //   cy.wait(1000);
  //   cy.get('.p-fluid > :nth-child(4)').click();
  //   cy.wait(1000);
  //   cy.get('.p-dropdown-filter').type(banco);
  //   cy.get('#pr_id_12_list > .p-element.ng-star-inserted > .p-ripple').click();
  //   cy.wait(1000);
  //   cy.get('.p-dialog-footer > .p-element.ng-star-inserted > .p-ripple').click();
  //   cy.wait(2000);
  // }
}

export default ClaseRecaudaciones;
