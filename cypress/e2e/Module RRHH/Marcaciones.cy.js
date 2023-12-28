describe('Marcaciones',() =>{

const Modulo = 'RRHH'
const idcdl = '1725733529'
const idApellido = 'URIÑA'
const Idempresa = 'PROCAMARONEX'
const idBiometrico = 'GARITA'
const idfechainicio = '2023-12-01'
const idfechafin = '2023-12-27'

const IdApell2 = 'URIÑA APOLO'
const Idbiometrico = 'GARITA'
const idfecharegistro = '2023-12-27'
const idhora = '08:00:00'
const idregistro = ''

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
        
        cy.get('.p-inputtext').type(Modulo);
        cy.wait(1000);
        
        cy.get('.layout-menuitem-root-text > .pi').click();
        cy.wait(1000);
        

        //MODULO MarcacioneS
        cy.get('.ng-tns-c62-63.ng-tns-c62-54 > .ng-star-inserted').click()
        cy.wait (1000)

        //Esconder el Menu
        cy.get('.ng-tns-c62-63.ng-tns-c62-54 > .ng-star-inserted').click()
        cy.wait(1000)

        //FILTROS
        // cy.get('#p-accordiontab-0').click()
        // cy.wait(1000)
        // cy.get(':nth-child(1) > .form-floating > .p-float-label > #float-input').type(idcdl)
        // cy.wait(1000)
        //cy.get(':nth-child(2) > .form-floating > .p-float-label > #float-input').type(idApellido)
        //cy.wait(1000)
        // Wait for options to be visible and then click the dropdown
        // cy.get(':nth-child(3) > .form-floating > .p-float-label > .p-inputwrapper > .p-dropdown').click();
        // cy.get('.p-dropdown-items').should('be.visible'); // Adjust '.p-dropdown-items' to the actual selector for your dropdown items

        // Now select the specific option
        // cy.contains('.p-dropdown-item', Idempresa).click();

        // cy.wait(1000)
        // cy.get(':nth-child(4) > .form-floating > .p-float-label > .p-inputwrapper > .p-dropdown').type(idBiometrico)
        // cy.wait(1000)
        // cy.get(':nth-child(5) > .p-float-label > .p-inputwrapper > .p-calendar > #calendar').type(idfechainicio)
        // cy.wait(1000)
        // cy.get(':nth-child(6) > .p-float-label > .p-inputwrapper > .p-calendar > #calendar').type(idfechafin)
        // cy.wait(1000)

        //Buscar
        //cy.get('#searchFilterMarcaciones').click()
        //cy.wait(1000)
        //cy.get('#cleanFormMarcaciones').click()
        //cy.wait(1000)

        //Nuevo registro
        cy.get('#onRegisterNewMarking > .p-ripple').click()
        //ingrese apellido
        cy.get('.col-md-3 > .p-float-label > .p-inputwrapper > .p-dropdown > .p-dropdown-label').type(IdApell2)
        cy.wait(1000)
        cy.get('.col-md-2 > .p-element.ng-star-inserted > .p-ripple').click()
        cy.wait(1000)
        cy.get(':nth-child(1) > .form-floating > .p-float-label > .p-inputwrapper > .p-dropdown').type(Idbiometrico)
        cy.wait(1000)
        cy.get('.p-card-content > .row > :nth-child(2)').type(idfecharegistro)
        cy.wait(1000)
        cy.get('.p-calendar > .ng-tns-c89-122').type(idhora)
        cy.wait(1000)
        cy.get('#floatingEspecificacion').type(idregistro)
        cy.wait(1000)















    });
});