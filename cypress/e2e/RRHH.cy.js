describe ('Test RRHH - Pesonal',() =>{

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
        
        cy.get('.ng-tns-c62-60.ng-tns-c62-54 > .ng-star-inserted').click();
        cy.wait(1000);
        //MODULO PERSONAL
        cy.get('.layout-menu-button > .pi').click();
        cy.get('.p-ripple').click();
        
        // Replace 'desiredDate' with the actual date you want to select in the format 'YYYY-MM-DD'
        const desiredDate = '1974-11-11';

        cy.get(':nth-child(1) > .p-toolbar > .row > :nth-child(2) > .p-float-label > #floatingNombre').type('JUANA');
        cy.get('#floatingApellido').type('PRUEBA');
        cy.get('.form-floating > .p-float-label > #floatingCedula').type('0914437272');
        cy.get('#flotingFechaNacimiento > .p-calendar > .p-element').click();
        cy.wait(1000);
        
        // Click to open the date picker
        // cy.get('.p-datepicker-calendar td span').contains(desiredDate.split('-')[2]).click();

        cy.get('#flotingFechaNacimiento > .p-calendar > #icon').type(desiredDate)



        cy.wait(1000);
        // cy.get('.p-toolbar > .row > .col-md-1 > .form-floating > #floatingEdad').click();
        cy.get('#p-tabpanel-0 > :nth-child(1) > .p-toolbar > .row > :nth-child(7) > .p-float-label > .p-inputwrapper > .p-dropdown > .p-dropdown-trigger').click();
        // cy.get('#pr_id_3_list > :nth-child(1) > .p-ripple > .ng-star-inserted').click()
        // Assuming you want to select an item with the text 'FEMENINO'
        cy.get('#pr_id_3_list').contains('FEMENINO').click();

        cy.get('#p-tabpanel-0 > :nth-child(1) > .p-toolbar > .row > :nth-child(8) > .p-float-label > .p-inputwrapper > .p-dropdown > .p-dropdown-label').click()
        cy.get('#pr_id_4_list').contains('HETEROSEXUAL').click();

        // Click on the element to open the dropdown
        cy.get('#p-tabpanel-0 > :nth-child(1) > .p-toolbar > .row > :nth-child(9)').click();

        // Click on the first item in the dropdown forcefully
        cy.get('.p-dropdown-items').first().click({ force: true })
        cy.get('.p-dropdown-items').contains('MESTIZO').click();
        cy.get('#p-tabpanel-0 > :nth-child(1) > .p-toolbar > .row > :nth-child(10) > .p-float-label > .p-inputwrapper > .p-dropdown').click()
        cy.get('#pr_id_6_list > :nth-child(1) > .p-ripple').click()
        cy.get('#floatingTelefono').type('0960803145')
        cy.get('#floatingCelular').type('0960803145')
        cy.get('#p-tabpanel-0 > :nth-child(1) > .p-toolbar > .row > :nth-child(13) > .p-float-label > #floatingEmail').type("sayod97848@gmail.com")
        cy.get(':nth-child(14) > .form-floating > .p-float-label > .p-inputwrapper > .p-dropdown').type('SIN').type('{enter}');

        //MATERNIDAD
        //cy.get(':nth-child(16) > .form-floating > .p-element > .p-inputswitch > .p-inputswitch-slider')
        //LACTANCIA
        //cy.get(':nth-child(17) > .form-floating > .p-element > .p-inputswitch > .p-inputswitch-slider')

        //LUGAR NACIMIENTO------------------------------------------------------------------------------------
        cy.get('#floatingLugarNacimientoCanto').type('GUAYAQUIL')
        cy.get('#floatingLugarNacimientoCuidad').type('GUAYAQUIL')
        cy.get('#floatingLugarNacimientoParroquia').type('XIMENA')

        //Datos de Recidencia---------------------------------------------------------------------------------------
        cy.get(':nth-child(5) > .p-toolbar > .row > :nth-child(2) > .p-float-label > .p-inputwrapper > .p-dropdown')
        .type('ECUADOR')
        cy.get('#pr_id_8_list > .p-element.ng-star-inserted > .p-ripple').click()

        cy.get(':nth-child(5) > .p-toolbar > .row > :nth-child(3) > .p-float-label > .p-inputwrapper > .p-dropdown > .p-dropdown-label').click()
        cy.get('#pr_id_9_list > .p-ripple').type('GUAYAS').click()
    
        
        cy.get(':nth-child(5) > .p-toolbar > .row > :nth-child(4) > .p-float-label > .p-inputwrapper > .p-dropdown')
        .type('')

        cy.get(':nth-child(5) > .p-toolbar > .row > :nth-child(5) > .p-float-label > .p-inputwrapper > .p-dropdown')
        .type('')

        cy.get('#floatingCuidad').type('')
        cy.get('#floatingDireccion').type('')
        cy.get(':nth-child(5) > .p-toolbar > .row > :nth-child(8) > .p-float-label > .p-inputwrapper > .p-dropdown').click()
        cy.get(':nth-child(5) > .p-toolbar > .row > :nth-child(9) > .p-float-label > .p-inputwrapper > .p-dropdown').click()
        cy.get('#floatingRutaDomiciliaria').type('')
        cy.get('#floatingEspecificacion').type('')

        // //Datos Educativos--------------------------------------------------------------------------------------------
        // cy.get(':nth-child(7) > .p-toolbar > .row > :nth-child(2) > .p-float-label > .p-inputwrapper > .p-dropdown').click()
        // cy.get(':nth-child(7) > .p-toolbar > .row > :nth-child(3) > .p-float-label > .p-inputwrapper > .p-dropdown').click()
        // cy.get('#floatingCelularContacto').type('')

        // //Estudia Actualmente------------------------------------------------------------------------------------------
        // cy.get(':nth-child(5) > .form-floating > .p-element > .p-inputswitch > .p-inputswitch-slider').click()
        // cy.get('.col-12.ng-star-inserted > .p-float-label > #floatingCelularContacto').type('')

        // //Informacion Adicional
        // //tiene tatuaje
        // cy.get(':nth-child(9) > .p-toolbar > .row > :nth-child(2) > .form-floating > .p-element > .p-inputswitch > .p-inputswitch-slider').click()
        // cy.get(':nth-child(3) > .p-float-label > #floatingCelularContacto').type('')
        // cy.get(':nth-child(9) > .p-toolbar > .row > :nth-child(4) > .p-float-label > #floatingCelularContacto').type('')
        // //licencia de conducir
        // cy.get(':nth-child(9) > .p-toolbar > .row > :nth-child(6) > .form-floating > .p-element > .p-inputswitch > .p-inputswitch-slider').click
        // cy.get(':nth-child(9) > .p-toolbar > .row > :nth-child(7) > .p-float-label > .p-inputwrapper > .p-dropdown')
        // cy.get(':nth-child(9) > .p-toolbar > .row > :nth-child(8) > .p-float-label > .p-inputwrapper > .p-dropdown')

        // //Informacion de Contacto
        // cy.get('.p-toolbar > .row > .col-md-3 > .p-element').click()
        // cy.get('.row > :nth-child(1) > .p-float-label > #floatingContacto').type('')
        // cy.get(':nth-child(2) > .p-float-label > #floatingDireccionContacto').type('')
        // cy.get('#floatingTelefonoContacto').type('')
        // cy.get('.section-table-container > .row > :nth-child(4) > .p-float-label > #floatingCelularContacto').type('')
        // cy.get('.section-table-container > .row > :nth-child(5) > .p-float-label > .p-inputwrapper > .p-dropdown').click()









    });
    



    

});
    



