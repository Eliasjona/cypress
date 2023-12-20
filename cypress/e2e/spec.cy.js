//ORIGINAL
// describe('RECAUDACIONES', () => {
//   it('Validar ingreso GDS', () => {

//const { describe } = require("mocha");

//     cy.intercept('POST', 'http://172.16.11.25:9999/api/login').as('loginRequest');

//     cy.visit('http://172.16.11.24:7200/guest/sign-in');
//     cy.get('#floatingUsername').type('jurina');
//     cy.get('.p-password > .p-inputtext').type('Eli96Apo');
//     cy.wait(1000);
//     cy.get('#floatingOP > .p-dropdown > .p-dropdown-trigger').click();
//     cy.wait(1000);
//     cy.get('#floatingOP > .p-dropdown > .p-dropdown-label').type('PROCAMARONEX');
//     cy.get('.p-fluid > .text-center').click();
//     cy.wait(1000);
//     cy.get('.p-dialog-header-close-icon').click();
//     cy.wait(1000);
//     cy.get('.p-toast-message-content');

//     // Espera a que se complete la solicitud de inicio de sesión interceptada
//     cy.wait('@loginRequest').its('response').then((response) => {
//       cy.expect(response.statusCode).to.equal(200);

//     //respuesta del servidor
//      /* cy.expect(response.body).to.deep.equal({



//       });*/

//       cy.log('Respuesta del servicio:', JSON.stringify(response.body));

//       // Continúa con el resto de tus pruebas
//     });
//   });
// });

//PRUEBA 3
describe('RECAUDACIONES', () => {
  it('Validar ingreso GDS', () => {
    // Intercepta la solicitud de inicio de sesión y asígnale un alias
    cy.intercept('POST', 'http://172.16.11.25:9999/api/login', (req) => {
      req.alias = 'loginRequest';
    }).as('loginRequest');

    // Realizar el inicio de sesión
    cy.visit('http://172.16.11.24:7200/guest/sign-in');
    cy.get('#floatingUsername').type('jurina');
    cy.get('.p-password > .p-inputtext').type('Eli96Apo');
    cy.wait(1000);

    cy.get('#floatingOP > .p-dropdown > .p-dropdown-trigger').click();
    cy.wait(1000);

    cy.get('#floatingOP > .p-dropdown > .p-dropdown-label').type('PROCAMARONEX');
    cy.get('.p-fluid > .text-center').click();
    cy.wait(1000);

    cy.get('.p-dialog-header-close-icon').click();
    cy.wait(1000);

    cy.get('.p-toast-message-content');

    cy.get('.p-inputtext').type('SALES');
    cy.wait(1000);

    cy.get('.ng-tns-c62-22.layout-root-menuitem').click();
    cy.get('.ng-tns-c62-24.ng-tns-c62-22 > .ng-star-inserted').click();
    cy.get('.layout-menu-button > .pi').click();

    cy.wait(2000);

    // Esperar la solicitud de inicio de sesión y asignar un alias
    cy.wait('@loginRequest',).then((loginInterception) => {
      // Verificar si la solicitud fue exitosa (código de estado 200)
      if (loginInterception.response && loginInterception.response.statusCode === 200) {
        // Mensaje de éxito
        cy.log('Inicio de sesión exitoso');

         // Objeto esperado
         const expectedResponseBody = {
          status: 'success',
          user: 'jurina',
          role: 'admin',
          // ... otras propiedades según la respuesta esperada
        };

        // Afirmación usando `expect`
        expect(loginInterception.response.body).to.deep.equal(expectedResponseBody);
      } else {
        // Mensaje de error
        cy.log('Error en el inicio de sesión');
      }
    });
     
      
      
    // });
    // cy.wait(5000);

    //  cy.expect(response.body).to.deep.equal({



    // });

    // Notificación
    //cy.get('#toast-container > .ng-trigger', { timeout: 10000 }).click({ force: true });

// describe('FILTROS RECAUDACIONES', () => {

//   //     // Filtros
//   //     cy.get('#p-accordiontab-0').click();
//   //     cy.wait(1000);
  
//   //     // Date
//   //     cy.get('.p-calendar > .ng-tns-c89-5').type('2023-12-19').type('{enter}');
//   //     cy.get('.p-calendar > .ng-tns-c89-6').type('2023-12-19').type('{enter}');
//   //     cy.wait(2000);

//   //     // Intercepta la solicitud de búsqueda de fechas
      
//   //     cy.intercept('POST','http://172.16.11.25:9998/api/FundraisingProcess/findFundraising/', (req) => {
//   //     req.alias = 'buscarFechaRequest'; // Asignar un alias a la solicitud
//   //     }).as('buscarFechaRequest');  
    
//   //     // Date
//   //     cy.get('.p-calendar > .ng-tns-c89-5').first().type('2023-12-09').type('{enter}');
//   //     cy.get('.p-calendar > .ng-tns-c89-6').first().type('2023-12-09').type('{enter}');
//   //     cy.wait(2000);

//   //      // Buscar date
//   //      cy.get(':nth-child(2) > :nth-child(1) > p-button.p-element > .p-ripple').click();
//   //      cy.wait(3000);


//   //     // Espera la solicitud relacionada con la búsqueda de fechas y asigna un alias
//   //     cy.wait('@buscarFechaRequest',{timeout: 1000}).then((buscarFechaInterception) => {
//   //     if (buscarFechaInterception.response && buscarFechaInterception.response.statusCode === 200) {
//   //     // Validaciones exitosas
//   //     cy.log('Búsqueda de fechas exitosa');
//   //     } else {
//   //     // Validaciones fallidas
//   //     cy.log('Error en la búsqueda de fechas');
//   //     }
//   //     });
// })
// describe('RECAUDACIONES', () => {
// //     // Recaudaciones
// //     cy.get('#p-tabpanel-1-label').click();
// //     cy.get('#float-cobranza').type("35");
// //     cy.get('.p-dropdown').click();
// //     cy.get('.p-dropdown-filter').type("GUAYAQUIL");
// //     cy.get('#pr_id_5_list > .p-element.ng-star-inserted > .p-ripple').click();
// //     cy.wait(1000);

// //     // Agrega la interceptación para la solicitud asociada a Recaudaciones
// //     cy.intercept('http://172.16.11.25:9998/api/FundraisingProcess/saveFundraising/', (req) => {
// //       req.alias = 'recaudacionesRequest'; // Asigna un alias a la solicitud
// //     }).as('recaudacionesRequest');

// //     // Agrega recaudaciones
// //     cy.get('[ptooltip="New Register"] > .p-ripple').click();
// //     cy.get('.p-calendar > .ng-tns-c89-131').type("2023-12-19").type('{enter}');
// //     cy.get('#floatingNcompra').type("63");
// //     cy.get('.p-inputnumber > .p-inputtext').type("100");
// //     cy.get('.p-fluid > :nth-child(1)').click();
// //     cy.get('.p-dropdown-filter').type("Banco Internacional");
// //     cy.get('#pr_id_6_list > .p-element.ng-star-inserted > .p-ripple').click();
// //     cy.wait(2000);

// //     // Guardar y esperar la solicitud
// //     cy.get('.p-dialog-footer > .p-element.ng-star-inserted').click();
// //     cy.wait('@recaudacionesRequest', { timeout: 10000 }).then((recaudacionesInterception) => {
// //       // Realiza validaciones relacionadas con la solicitud de Recaudaciones
// //       if (recaudacionesInterception.response && recaudacionesInterception.response.statusCode === 200) {
// //         // Validaciones exitosas
// //         cy.log('Solicitud de Recaudaciones exitosa');
// //       } else {
// //         // Validaciones fallidas
// //         cy.log('Error en la solicitud de Recaudaciones');
// //       }
// //     });


// //    // //buscar recaudaciones
// //    // cy.get(':nth-child(2) > :nth-child(1) > p-button.p-element > .p-ripple').click();
// //    // cy.wait(2000);
   
// //    // //limpiar recaudaciones
// //    // cy.get(':nth-child(2) > p-button.p-element > .p-ripple').click()

// //    // //buscar recaudaciones 
// //    // cy.get(':nth-child(2) > :nth-child(1) > p-button.p-element > .p-ripple').click();
// //    // cy.wait(2000);
   

// //    //PI
// //    // cy.get('#p-tabpanel-2-label').click()
   
// //    //Numero de factura
// //    // cy.get(':nth-child(1) > .field > .p-float-label > .ng-untouched > .p-inputtext').type("60")

// //    //Numero PI
// //    //cy.get(':nth-child(2) > .field > .p-float-label > .ng-untouched > .p-inputtext').type("")
// //    //cy.wait(1000);

// //    //buscar
// //    // cy.get(':nth-child(2) > :nth-child(1) > p-button.p-element > .p-ripple').click();
// //    // cy.wait(2000);

// //    //limpiar
// //    //cy.get(':nth-child(2) > p-button.p-element > .p-ripple').click();

// //    // buscar PI 
// //    // cy.get(':nth-child(2) > :nth-child(1) > p-button.p-element > .p-ripple').click();
// //    // cy.wait(2000);

// //    //Agregar Recaudaciones
// //    cy.get('[ptooltip="New Register"] > .p-ripple').click()
// //    cy.get('.p-calendar > .ng-tns-c89-131').type("2023-12-18").type('{enter}')
// //    //cy.get('.p-calendar > .ng-tns-c89-128').type("2023-12-12").type('{enter}')
// //    cy.get('#floatingNcompra').type("50")
// //    cy.get('.p-inputnumber > .p-inputtext').type("2000")
// //    cy.get('.p-fluid > :nth-child(4)').click()
// //    cy.get('.p-dropdown-filter').type("Banco Internacional")
// //    cy.get('#pr_id_6_list > .p-element.ng-star-inserted > .p-ripple').click()
// //    cy.wait(2000);

// //    //cancelar
// //    // cy.get('.p-dialog-header-icons').click();
// //    // cy.wait(1000);

// //    //Guardar
// //    cy.get('.p-dialog-footer > .p-element.ng-star-inserted').click();



// //    //Acciones
// //    cy.get(':nth-child(1) > .cdk-column-Actions > .mat-focus-indicator').click()
// //    cy.wait(1000);

// //    //Visualizar
// //    // cy.get('.mat-menu-content > :nth-child(1)').click();
// //    // cy.wait(1000);
// //    // cy.get('.p-dialog-header-icons > .p-ripple').click()

// //    // Editar
// //    // cy.get('.mat-menu-content > :nth-child(2)').click()
// //    // cy.get('#floatingFecha > .p-calendar > .p-inputtext').clear().type('2023-12-09').type('{enter}')
// //    // cy.get('#floatingNcompra').clear().type("70")
// //    // cy.get('.p-inputnumber > .p-inputtext').clear().type("35000")
// //    // cy.get('.p-fluid > :nth-child(4)').click()
// //    // cy.get('.p-dropdown-filter').type("Guayaquil")
// //    // cy.get('#pr_id_6_list > .p-element.ng-star-inserted > .p-ripple').click()
// //    // cy.wait(2000);

// //    //cancelar
// //    // cy.get('.p-dialog-header-icons').click();
// //    // cy.wait(1000);

// //    // //Guardar
// //    // cy.get('.p-dialog-footer > .p-element.ng-star-inserted').click();

// //    // //limpiar recaudaciones
// //    // cy.get(':nth-child(2) > p-button.p-element > .p-ripple').click()

// //    // //buscar recaudaciones 
// //    // cy.get(':nth-child(2) > :nth-child(1) > p-button.p-element > .p-ripple').click();
// //    // cy.wait(2000);

// })

// describe('DISTRIBUIR',  ()=> {
// //     // Distribuir
// //     cy.get('.mat-menu-content > :nth-child(3)').click();
// //     cy.wait(2000);
 
// //     // Esperar la solicitud relacionada con la distribución y asignar un alias
// //     cy.wait('@distribuirRequest').then((distribuirInterception) => {
// //     // Realizar validaciones relacionadas con la distribución
// //     // Por ejemplo, verificar el código de estado, el cuerpo de la respuesta, etc.
// //     if (distribuirInterception.response && distribuirInterception.response.statusCode === 200) {
// //     // Validaciones exitosas
// //     cy.log('Distribución exitosa');
// //     } else {
// //          // Validaciones fallidas
// //          cy.log('Error en la distribución');
// //        }
// //      });
 
// //      // Filtros
// //      //cy.get('#p-accordiontab-1').click();
 
// //      // ... (Código anterior)
 
// //      // Notificación
// //      //cy.get('#toast-container > .ng-trigger').click();
//   })
 
  });
});
