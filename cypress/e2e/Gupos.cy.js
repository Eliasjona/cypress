// describe ('Test RRHH - Grupos',() =>{
//     it('Validar ingreso GDS', () => {
//         cy.visit('http://172.16.11.24:7200/guest/sign-in');
//         cy.get('#floatingUsername').type('jurina');
//         cy.get('.p-password > .p-inputtext').type('Eli96Apo');
//         cy.wait(1000);
        
//         cy.get('#floatingOP > .p-dropdown > .p-dropdown-trigger').click();
//         cy.wait(1000);
        
//         cy.get('#floatingOP > .p-dropdown > .p-dropdown-label').type('PROCAMARONEX');
//         cy.get('.p-fluid > .text-center').click();
//         cy.wait(1000);
        
//         cy.get('.p-dialog-header-close-icon').click();
//         cy.wait(1000);
        
//         cy.get('.p-inputtext').type('RRHH');
//         cy.wait(1000);
        
//         cy.get('.layout-menuitem-root-text > .pi').click();
//         cy.wait(1000);
        
//         cy.get('.ng-tns-c62-55.ng-tns-c62-54 > .ng-star-inserted').click();
//         cy.wait(1000);

//         cy.get('.layout-menu-button').click()

//         //FILTROS
//         //cy.get('#p-accordiontab-0').click()
//         //cy.get('#floatingGrupo').click()
//         //cy.get('#searchFilterGroup').click()
//         //cy.get('#cleanFormGroup').click()

//         // AÑADIR GRUPO
//         cy.get('.p-ripple').click()
//         //Detalle
//         cy.get('#p-tabpanel-0-label').click()
//         cy.get(':nth-child(2) > .form-floating > .p-float-label > #floatingGrupo').type('CHAMBA')
//         cy.get(':nth-child(3) > .p-float-label > .p-inputwrapper > .p-dropdown').type('PROCAMARONEX')
//         cy.get('#pr_id_7_list > .p-element.ng-star-inserted > .p-ripple').click()
//         cy.get(':nth-child(4) > .p-float-label > .p-inputwrapper > .p-dropdown').type('ADMINISTRACION')
//         cy.get('#pr_id_8_list > .p-element.ng-star-inserted > .p-ripple').click()
//         cy.get(':nth-child(5) > .p-float-label > .p-inputwrapper > .p-dropdown').type('SISTEMAS')
//         cy.get('#pr_id_9_list > :nth-child(2) > .p-ripple').click()
//         //HORARIO
//         cy.get('#p-tabpanel-1-label').click()
//         cy.get('.row > .col-md-4 > .p-float-label > .p-inputwrapper > .p-dropdown').type('08:30')
//         cy.get('#pr_id_10_list > :nth-child(1) > .p-ripple > .ng-star-inserted').click()

//         cy.wait(1000)

//         //AGREGAR HORARIO
//         //cy.get('#agregarHorariosAlTable').click()

//         //ELIMINAR HORARIO
//         //cy.get('.dx-button-content').click()
//         //cy.wait(1000)


//         //GUARDAR
//         // cy.get('#aggNewGroup').click()
//         //cy.wait(1000)


//         //CANCELAR
//         cy.get('#closePopUpGroup').click()
//         cy.wait(1000)


//     })
// })


  