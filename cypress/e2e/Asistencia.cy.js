describe ('ASISTENCIA',() =>{
    it('Validar ingreso GDS', () => {
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
          
        cy.get('.p-inputtext').type('RRHH');
        cy.wait(1000);
        
        cy.get('.layout-menuitem-root-text > .pi').click();
        cy.wait(1000);

        cy.get('.ng-tns-c62-64.ng-tns-c62-54 > .ng-star-inserted').click();
        cy.wait(1000);

        cy.get('.layout-menu-button > .pi').click();

        cy.get('#p-accordiontab-0').click()


        cy.get(':nth-child(1) > .field > .form-floating > .p-float-label > .p-inputwrapper > .p-dropdown').click();
        cy.get('.p-dropdown-filter').type('SISTEMAS')
        cy.wait(6000);
        cy.get(':nth-child(2) > .p-ripple').click()
        cy.wait(2000);
        cy.get('#searchFilterMarcaciones').click()
        cy.wait(12000);
        cy.get('.mat-form-field-type-mat-input > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type('HEREDIA').type('{enter}');
        cy.wait(19000);
        cy.get('#searchFilterMarcaciones').click()
        cy.wait(12000);
        cy.get('.mat-form-field-type-mat-input > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type('LOPEZ').type('{enter}');
        cy.wait(19000);
        cy.get('#searchFilterMarcaciones').click()
        cy.wait(12000);

        


           




    })


})