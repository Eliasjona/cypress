import ClaseLogin from "../Login/login";

class ClaseRecaudaciones {
  static realizarPrueba() {
  
    describe('RECAUDACIONES', () => {
      before(() => {
        ClaseLogin.ingresoLogin();
      
      });

      it('Ingresa Recaudaciones', () => {
        ClaseRecaudaciones.ingresarRecaudaciones();
      });

      it('Registrar Recaudacion', () => {
        ClaseRecaudaciones.Registrorecaudacion();
        cy.visit('http://172.16.11.24:7200/gds/mf-ventas/recaudaciones');
      });

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
    } else {
      console.error('Debe ingresar un nombre de módulo válido.');
    }
      cy.get('.ng-tns-c62-11.layout-root-menuitem > .layout-menuitem-root-text').click()
      cy.get('.ng-tns-c62-13.ng-tns-c62-11 > .ng-star-inserted').click()
      cy.wait(1000); 
      cy.get('.layout-menu-button').click();
      cy.wait(1000);
      
  
  }


 
  // static Registrorecaudacion(){
  //   cy.url().should('include', '/dashboard');
  //   cy.visit('http://172.16.11.24:7200/gds/mf-ventas/recaudaciones');
  //   const idfecha = prompt ('ingresar fecha')
  //   const idcompra = prompt ('ingresa el numero de compra');
  //   const Idmonto = prompt ('ingresa el monto')
  //   const idbanco = prompt ('ingresar el banco');

    

  //   if (idfecha){
  //     cy.clearCookies()
  //     cy.clearLocalStorage()
  //     cy.get('[ptooltip="New Register"] > .p-ripple', { timeout: 10000 }).click();
  //     cy.wait(1000);
  //   } else {
  //     console.error('Debe ingresar los Valores correspondientes')
  //   }
  //   if(idcompra){
  //     cy.get('#floatingNcompra').type(idcompra);
  //   } else {
  //     console.error('Monto ya Registrado')
  //   }
  //     cy.get('#floatingFecha').type(idfecha, { force: true }).type('{enter}', { force: true });

  //     cy.get('.p-inputnumber > .p-inputtext').type(Idmonto);
  //     cy.get('.p-fluid > :nth-child(4)').click();
  //     cy.get('.p-dropdown-filter').type(idbanco);
  //     cy.get('#pr_id_6_list > .p-element.ng-star-inserted > .p-ripple').click();
  //     cy.wait(1000);
  //     cy.get('.p-dialog-footer > .p-element.ng-star-inserted').click();
  //     cy.wait(1000);
   
  // }

  
    static Registrorecaudacion(){
      
  
      // Visitar la URL específica de la recaudación
     
      cy.get('[data-testid="unique-dashboard-element"]', {timeout: 10000}).should('be.visible');
      cy.url().should('include', '/dashboard');
  
      // Obtener valores a través de prompts
      const idfecha = prompt('Ingresar fecha');
      const idcompra = prompt('Ingresa el número de compra');
      const Idmonto = prompt('Ingresa el monto');
      const idbanco = prompt('Ingresar el banco');
  
      // Verificar que todos los valores necesarios han sido ingresados
      if (!idfecha || !idcompra || !Idmonto || !idbanco) {
        console.error('Debe ingresar todos los valores correspondientes');
        return; // Detener ejecución si falta algún valor
      }
  
      // A partir de aquí se asume que todos los valores han sido ingresados
      cy.clearCookies();
      cy.clearLocalStorage();
  
      // Interacciones con la página
      cy.get('[ptooltip="New Register"] > .p-ripple', { timeout: 10000 }).click();
      cy.wait(1000);
  
      cy.get('#floatingNcompra').type(idcompra);
      cy.get('#floatingFecha').type(idfecha, { force: true }).type('{enter}', { force: true });
      cy.get('.p-inputnumber > .p-inputtext').type(Idmonto);
      cy.get('.p-fluid > :nth-child(4)').click();
      cy.get('.p-dropdown-filter').type(idbanco);
      cy.get('#pr_id_6_list > .p-element.ng-star-inserted > .p-ripple').click();
      cy.wait(1000);
      cy.get('.p-dialog-footer > .p-element.ng-star-inserted').click();
      cy.wait(1000);
    }
  }


  

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


export default ClaseRecaudaciones;
