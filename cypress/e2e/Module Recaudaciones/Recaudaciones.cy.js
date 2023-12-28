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

      //notificacion -----------------------------------------------------------------------------------------------------------
      //cy.get('#toast-container > .ng-trigger').click()
      //const desiredDate = '2023-12-18';
      //filtros-----------------------------------------------------------------------------------------------------------

      // cy.get('#p-accordiontab-0').click()
      // cy.wait(1000);

      // //date
      // cy.get('.p-calendar > .ng-tns-c89-5').type(FechaInicio).type('{enter}')
      // cy.get('.p-calendar > .ng-tns-c89-6').type(FechaFin).type('{enter}')
      // cy.wait(2000);

      // //buscar date
      // cy.get(':nth-child(2) > :nth-child(1) > p-button.p-element > .p-ripple').click();
      // cy.wait(3000);

      //Recaudaciones
      // cy.get('#p-tabpanel-1-label').click()
      // cy.get('#float-cobranza').type("60")
      // cy.get('.p-dropdown').click()
      // cy.get('.p-dropdown-filter').type("Banco Internacional")
      // cy.get('#pr_id_5_list > .p-element.ng-star-inserted > .p-ripple').click()
      // cy.wait(1000);

      // //buscar recaudaciones
      // cy.get(':nth-child(2) > :nth-child(1) > p-button.p-element > .p-ripple').click();
      // cy.wait(2000);
      
      // //limpiar recaudaciones
      // cy.get(':nth-child(2) > p-button.p-element > .p-ripple').click()

      // //buscar recaudaciones 
      // cy.get(':nth-child(2) > :nth-child(1) > p-button.p-element > .p-ripple').click();
      // cy.wait(2000);
      

      //PI
      // cy.get('#p-tabpanel-2-label').click()
      
      //Numero de factura
      // cy.get(':nth-child(1) > .field > .p-float-label > .ng-untouched > .p-inputtext').type("60")

      //Numero PI
      //cy.get(':nth-child(2) > .field > .p-float-label > .ng-untouched > .p-inputtext').type("")
      //cy.wait(1000);

      //buscar
      // cy.get(':nth-child(2) > :nth-child(1) > p-button.p-element > .p-ripple').click();
      // cy.wait(2000);

      //limpiar
      //cy.get(':nth-child(2) > p-button.p-element > .p-ripple').click();

      // buscar PI 
      // cy.get(':nth-child(2) > :nth-child(1) > p-button.p-element > .p-ripple').click();
      // cy.wait(2000);



      // //Agregar Nueva Recaudacion
      cy.get('[ptooltip="New Register"] > .p-ripple').click()
      cy.get('.p-calendar.ng-tns-c89-128').should('be.visible', { timeout: 40000 }).click();

      // Buscar el input de fecha dentro del calendario y escribir en él
      cy.get('.p-calendar.ng-tns-c89-128 input').type(idfecha, { force: true }).type('{enter}', { force: true });

      cy.get('#floatingNcompra').type(idcompra)
      cy.get('.p-inputnumber > .p-inputtext').type(Idmonto)
      cy.get('.p-fluid > :nth-child(4)').click()
      cy.get('.p-dropdown-filter').type(idbanco)
      cy.get('#pr_id_6_list > .p-element.ng-star-inserted > .p-ripple').click()
      cy.wait(1000);
      //Guardar
      cy.get('.p-dialog-footer > .p-element.ng-star-inserted').click();
     
      cy.wait(1000);
    //   cy.get('.p-calendar > .ng-tns-c89-128 > #icon').type(desiredDate)
    //   cy.intercept('POST', 'http://172.16.11.25:9998/api/FundraisingProcess/saveFundraising/', (req) => {
    // req.alias = 'saveRecaudaciones';
    // }).as('saveRecaudaciones');
  
    //   cy.get('#floatingNcompra').type("50")
    //   cy.get('.p-inputnumber > .p-inputtext').type("2000")
    //   cy.get('.p-fluid > :nth-child(4)').click()
    //   cy.get('.p-dropdown-filter').type("Banco Internacional")
    //   cy.get('#pr_id_6_list > .p-element.ng-star-inserted > .p-ripple').click()
    //   cy.wait(2000);

      // cy.wait('@saveRecaudaciones',{timeout:15000}).then((recaudacionesInterception) => {
      //     // Verificar si la solicitud fue exitosa (código de estado 200)
      //     if (recaudacionesInterception.response && recaudacionesInterception.response.statusCode === 200) {
      //       // Mensaje de éxito
      //       cy.log('Save exitoso');
      //       cy.log('Respuesta del servicio:', JSON.stringify(response.body));
    
      //        // Objeto esperado
      //      //    const expectedResponseBody = {
      //      //     status: 'success',
      //      //     user: 'jurina',
      //      //     role: 'admin',
      //      //     // ... otras propiedades según la respuesta esperada
      //      //   };
    
      //       // Afirmación usando `expect`
      //     //   expect(loginInterception.response.body).to.deep.equal(expectedResponseBody);
      //     } else {
      //       // Mensaje de error
      //       cy.log('Save error');
      //       cy.log('Respuesta del servicio:', JSON.stringify(recaudacionesInterception.response.body));
      //     }
      // });

      //cancelar
      // cy.get('.p-dialog-header-icons').click();
      // cy.wait(1000);

      //Guardar
      //cy.get('.p-dialog-footer > .p-element.ng-star-inserted').click();

   //----------------------------------------------------------------------------------------------------------------------------

    //Acciones
    cy.get(':nth-child(1) > .cdk-column-Actions > .mat-focus-indicator').click()
    cy.wait(1000);

    //Visualizar
    cy.get('.mat-menu-content > :nth-child(2)').click();
    cy.wait(1000);
    cy.get('.p-dialog-header-icons > .p-ripple').click()
    //-----------------------------------------------------------------------------------------------------------------------------
    // Editar
    // cy.get('.mat-menu-content > :nth-child(3)').click()
    // cy.get('#floatingFecha > .p-calendar > .p-inputtext').clear().type('2023-12-09').type('{enter}')
    // cy.get('#floatingNcompra').clear().type("70")
    // cy.get('.p-inputnumber > .p-inputtext').clear().type("35000")
    // cy.get('.p-fluid > :nth-child(4)').click()
    // cy.get('.p-dropdown-filter').type("Guayaquil")
    // cy.get('#pr_id_6_list > .p-element.ng-star-inserted > .p-ripple').click()
    // cy.wait(2000);
   //-------------------------------------------------------------------------------------------------------------------------------
    //cancelar
    cy.get('.p-dialog-header-icons').click();
    cy.wait(1000);

    // //Guardar
    // cy.get('.p-dialog-footer > .p-element.ng-star-inserted').click();

    // //limpiar recaudaciones
    // cy.get(':nth-child(2) > p-button.p-element > .p-ripple').click()

    // //buscar recaudaciones 
    // cy.get(':nth-child(2) > :nth-child(1) > p-button.p-element > .p-ripple').click();
    // cy.wait(2000);


  
  });


});