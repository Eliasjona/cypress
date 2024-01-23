import ClaseLogin from "../Login/login";


class ClaseDistribucion {
   
   static realizarPrueba() {
     
    //Distribucion
    const FechaInicio = '2023-12-28';
    const FechaFin = '2023-12-28';
    const idcustumer = '';
    const Idfecha = '2023-12-21';
    const CodigoSwift = 'PRUEBA';
    const ESTADO = 'PENDIENTE';
   
    //EDITAR 
    const idswift = 'PRUEBA1';
    const Id_fecha = "2023-12-23";
    const status = 'APROBADO';
    const CUSTUMER = 'MIANPA S.A.';  
      
      describe('Distribucion',() =>{
         before(() => {
            ClaseLogin.ingresoLogin();
         
         });

         it('Ingresar Recaudaciones', () => {
            ClaseDistribucion.ingresarRecaudaciones();
         });

        it ('Registrar Distribucion', () => {
         ClaseLogin.ingresoLogin();
         cy.visit('http://172.16.11.24:7200/gds/mf-ventas/recaudaciones');
          cy.get('[ptooltip="New Register"] > .p-ripple').scrollIntoView().should('be.visible').click();

          cy.get('.p-calendar.ng-tns-c89-127').should('be.visible', { timeout: 40000 }).click();
          cy.get('.p-element.ng-star-inserted > .p-ripple').click({ multiple: true, force: true });
          
          cy.get('#floatingCodigoSwift').type(CodigoSwift);
          cy.get('#floatingFecha > .p-calendar > .p-inputtext').type(Idfecha, { force: true }).type('{enter}', { force: true });
  
          cy.get(':nth-child(4) > .p-float-label > .p-inputwrapper > .p-dropdown').type(ESTADO).type('{enter}')
  
          cy.get('.md\\:col-8 > .p-float-label > .p-inputwrapper > .p-dropdown').click();
          cy.get(':nth-child(5) > .p-ripple > .ng-star-inserted').click();
  
          cy.wait(2000);
          cy.get('.p-inputswitch-slider').click();
         });

     
         it('SUBIR ARCHIVO',()=>{
            cy.get('#inpFileUpload').attachFile([
               { filePath: "images/CAPTURA2.png", encoding: 'base64' },
               { filePath: "images/capture.png", encoding: 'base64' },
               // Agrega más objetos si necesitas subir más imágenes
             ]);
          cy.wait(2000);
          cy.get('.p-dialog-footer > .p-element.ng-star-inserted > .p-ripple').click()
          cy.wait(2000);
         })

         it ('ACCIONES'); ()=> {
            
            cy.get(':nth-child(1) > .cdk-column-Actions > .mat-focus-indicator > .mat-button-wrapper > .mat-icon').click()
            cy.wait(1000);
            //adjuntos
           cy.get('.mat-menu-content > :nth-child(1)').click()
           cy.wait(2000);
           //descargar
           //cy.get('.gallery-download').click()
           //cy.wait(1000);
           //eliminar
           //cy.get('.gallery-destroy').click()
           //cy.wait(1000);
           //salir 
           cy.get('.p-galleria-close').click()
           cy.wait(1000);
           //ver
           cy.get(':nth-child(1) > .cdk-column-Actions > .mat-focus-indicator > .mat-button-wrapper > .mat-icon').click()
           cy.wait(1000);
           cy.get('.mat-menu-content > :nth-child(2)').click()
           cy.wait(2000);
           //salir
           cy.get('.p-dialog-header-icons > .p-ripple').click()
           cy.wait(1000);
           //edit
           cy.get(':nth-child(1) > .cdk-column-Actions > .mat-focus-indicator > .mat-button-wrapper > .mat-icon').click()
           cy.wait(1000);
           cy.get('.mat-menu-content > :nth-child(3)').click()
           cy.wait(1000);
           cy.get('#floatingCodigoSwift').clear().type(idswift)
           cy.wait(1000);
           cy.get('.p-calendar-clear-icon').click()
           cy.wait(1000)
           cy.get('#floatingFecha > .p-calendar > .p-inputtext').type(Id_fecha)
           cy.wait(1000);
           cy.get(':nth-child(4) > .p-float-label > .p-inputwrapper > .p-dropdown > .p-dropdown-trigger').click()
           cy.get('#pr_id_19_list > :nth-child(1) > .p-ripple').click()
           cy.wait(1000);
           
           cy.get('#pr_id_20_label').click();
   
           cy.get('#pr_id_20_list > :nth-child(1) > .p-ripple').click()
           cy.wait(1000);
           cy.get('.p-inputswitch-slider').click()
           cy.wait(1000);
           //guardar
           cy.get('.p-dialog-footer > .p-element.ng-star-inserted > .p-ripple').click()
           cy.wait(1000);
           //cancelar
          //   cy.get('.p-dialog-header-icons > .p-ripple').click()
            //   cy.wait(1000);
         }
        
         it('Distribucion filtros', () => {
            cy.get('#p-accordiontab-1').click()
     
            //date------------------------------------------------------------------------------------------------------------------------
            cy.get('.p-calendar > .ng-tns-c89-133').type("FechaInicio")
            cy.get('.p-calendar > .ng-tns-c89-134').type("FechaFin")
            //custumer-------------------------------------------------------------------------------------------------------------------
            cy.get(':nth-child(3) > .field').type("idcustumer")
       
            //buscar---------------------------------------------------------------------------------------------------------------------
            cy.get(':nth-child(4) > :nth-child(1) > p-button.p-element > .p-ripple').click()
            //limpiar----------------------------------------------------------------------------------------------------------------------
            cy.get(':nth-child(2) > p-button.p-element > .p-ripple').click()
         });
           
      });
   };
   static ingresarRecaudaciones() {
      const module = 'VENTAS'
      cy.get('.p-inputtext').eq(0).type(module);
      cy.wait(1000);
      cy.get('.ng-tns-c62-21.layout-root-menuitem > .layout-menuitem-root-text').click();
      cy.wait(1000);
      cy.get('.ng-tns-c62-23.ng-tns-c62-21 > .ng-star-inserted').click()
      cy.get('.layout-menu-button > .pi').click();
      cy.wait(1000);
      cy.get(':nth-child(1) > .cdk-column-Actions > .mat-focus-indicator').click()
      cy.wait(1000);
      cy.get('.mat-menu-content > :nth-child(3)').click();
      cy.wait(2000);
    };
}

export default ClaseDistribucion;