describe ('RECAUDACIONES',() =>{

    const user = 'jurina';
    const password = 'Eli96Apo';
    const empresa = 'PROCAMARONEX';
    const module = 'VENTAS';
    const FechaInicio = '2023-12-28';
    const FechaFin = '2023-12-28';
  
    //registro nueva recaudacion
    const idfecha = '2023-12-28';
    const idcompra = '15';
    const Idmonto = '15000';
    const idbanco = 'BANCO INTERNACIONAL';
  
    it('Validar ingreso GDS', () => {
    cy.visit('http://172.16.11.24:7200/guest/sign-in');
    cy.get('#floatingUsername').type(user);
        cy.get('.p-password > .p-inputtext').type(password);
        cy.wait(1000);
          
        cy.get('#floatingOP > .p-dropdown > .p-dropdown-trigger').click();
        cy.wait(1000);
          
        cy.get('#floatingOP > .p-dropdown > .p-dropdown-label').type(empresa);
        cy.get('.p-fluid > .text-center').click();
        cy.wait(1000);
  
       
          
        cy.get('.p-dialog-header-close-icon').click();
        cy.wait(1000);
  
        cy.get('.p-toast-message-content')
        
          
        cy.get('.p-inputtext').type(module);
        cy.wait(1000);
        
        cy.get('.ng-tns-c62-22.layout-root-menuitem').click()
        cy.get('.ng-tns-c62-24.ng-tns-c62-22 > .ng-star-inserted').click()
        cy.get('.layout-menu-button > .pi').click();
        
        cy.wait(2000);
  
      //Acciones-------------------------------------------------------------------------------------------------------------------
      cy.get(':nth-child(1) > .cdk-column-Actions > .mat-focus-indicator').click()
      cy.wait(1000);   
      //asignar pi
      cy.get(':nth-child(1) > .cdk-column-Actions > .mat-focus-indicator > .mat-button-wrapper > .mat-icon').click()
      cy.wait(1000);
      cy.get('.mat-menu-content > :nth-child(4)').click()
      cy.wait(1000);
      //registrar PI
      cy.get('.p-element.ng-star-inserted > .p-ripple').click()
      cy.wait(1000);
      cy.get(':nth-child(1) > .p-float-label > .p-inputwrapper > .p-dropdown > .p-dropdown-label').click()
      cy.wait(1000);
      cy.get('#pr_id_23_list > :nth-child(1) > .p-ripple').click()
      cy.wait(1000);
      cy.get(':nth-child(2) > .p-float-label > .p-inputwrapper > .p-dropdown > .p-dropdown-label').click()
      cy.wait(1000);
      cy.get('#pr_id_24_list > :nth-child(1) > .p-ripple').click()
      cy.wait(1000);
      cy.get('#floatingValorPactado').type('15000')
      cy.wait(1000);
      cy.get('#floatingValorRecaudado').type('150')
      cy.wait(1000);
      //agregar descuento
      cy.get('.p-float-label > .p-button').click()
      cy.wait(1000);
      cy.get('.section-table-container > .p-fluid > :nth-child(1) > .p-float-label > .p-inputwrapper > .p-dropdown > .p-dropdown-label').click()
      cy.get('#pr_id_25_list > :nth-child(2) > .p-ripple').click()
      cy.wait(1000);
      cy.get('#floatingRecurso').type('150')
      cy.wait(1000);
      //guardar 
      cy.get('.p-dialog-footer > .p-element.ng-star-inserted > .p-ripple').click()
      cy.wait(1000);
      //cancelar
      //cy.get('.p-dialog-header-icons > .p-ripple').click()
      //cy.wait(1000);
      //acciones 
      cy.get('.cdk-column-Actions > .mat-focus-indicator').click()
      cy.wait(1000);
      //cy.get('.mat-menu-content > :nth-child(1)').click()
      //cy.wait(1000);
      //cy.get('.mat-menu-content > :nth-child(2)').click()
      //cy.wait(1000);
      //cy.get('.mat-menu-content > :nth-child(3)').click()
      //cy.wait(1000);
  
    });
  
  
  });