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
          
        cy.get('.p-inputtext').type('VENTAS');
        cy.wait(1000);

        cy.get('.ng-tns-c62-22.layout-root-menuitem').click()
        cy.wait(1000);
        cy.get('.ng-tns-c62-23.ng-tns-c62-22 > .ng-star-inserted').click()
        cy.wait(1000);
        
    

        

        


           




    })


})