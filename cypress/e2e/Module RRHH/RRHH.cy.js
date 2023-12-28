describe ('Test RRHH - Pesonal',() =>{

//PERSONAL

const Name = "PEPE";
const lastName = "CHAMBA"
const Idcedula = "0914437272"
const desiredDate = '1974-11-11';
const Idsexo = 'MASCULINO';
const IdGenero = 'HETEROSEXUAL';
const IdEtnica = 'MESTIZO';
const IdTelefono = '0960803145';
const IdCelular = '0960803145';
const IdEmail = 'sayod97848@gmail.com';
const IdDiscapacidad = 'CON DISCAPACIDAD';
const IdEstadoCivil = 'SOLTERO'
const IdPorcentajeDiscapacidad = '15'
const TipoDiscapacidad = 'FISICA'

//LUGAR NACIMIENTO
const Idcanton = 'GUAYAQUIL';
const Idciudad = 'GUAYAQUIL';
const Idparroquia = 'XIMENA';

//Datos de Recidencia
const IdPais = 'ECUADOR';
const IdProvincia = 'GUAYAS';
const IdCanton2 = 'GUAYAQUIL';
const IdParroquia2 = 'PASCUALES';
const IdCiudad2 = 'GUAYAQUIL';
const IdDireccion = '25 JULIO';
const IdSector = 'NORTE';
const opcionzona = 'URBANA';
const IdReferencia = 'FRENTE AL MALL';
const IdRuta = 'SALGO DE CASA Y AVANZO 5 CUADRAS......'

//Datos Educativos
const IdInstitucion = 'BACHILLERATO';
const IdProfesion = 'Programadores de aplicaciones';
const IdDetalle = 'PRE';
const IdCheckDetalle = 'POR CULMINAR';
const IdDetalle2 = 'PRE';

//Informacion Adicional
const IdTatuaje = '4';
const IdCuerpo = 'VARIAS PARTES CUERPO'

//Licencia
const licencia = 'A';
const TipoSangre = "AB+";

//Informacion de Contacto
const idname = 'JOAN';
const idDireccion1 = 'GUASMO SUR';
const idtelefonia = '042790452';
const idcell = '09060803145';
const idpariente = 'Padre';

//SUBMODULE SOCIAL
const IdEnfermedad = 'ALERGIA';
const IdDonde = 'CASA';
const idtipoAlergia = 'POLVO';
const idaccidente = 'CALLE'
const IdOperacion = 'APENDICE'

//ENFERMEDAD
const Idtalla = '38';
const IdtallaPantalon = '26';
const Idzapatos = '42';
const talla = '26';
const tipo = 'MASCARILLA';
const detalle = 'viejas';
const IdReligion = 'CATOLICO';

//ASPECTO DE VIVIENDA
const N_vivienda = '4';
const ComparteVivienda = 'FAMILIARES';
const TipoVivienda = 'VILLA';
const Idtenencia = 'PROPIA';
const M_Construccion = 'CEMENTO';
const condicion = 'CONSTRUIDO';

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
        
        // cy.get(':nth-child(1) > .p-toolbar > .row > :nth-child(2) > .p-float-label > #floatingNombre').type(Name);
        // cy.get('#floatingApellido').type(lastName);
        // cy.get('.form-floating > .p-float-label > #floatingCedula').type(Idcedula);
        // cy.get('#flotingFechaNacimiento > .p-calendar > .p-element').click();
        // cy.wait(1000);

        // cy.get('#flotingFechaNacimiento > .p-calendar > #icon').type(desiredDate)
        // cy.wait(1000);
        
        // cy.get('#p-tabpanel-0 > :nth-child(1) > .p-toolbar > .row > :nth-child(7) > .p-float-label > .p-inputwrapper > .p-dropdown > .p-dropdown-trigger').click();
        // // cy.get('#pr_id_3_list > :nth-child(1) > .p-ripple > .ng-star-inserted').click()
        // // Assuming you want to select an item with the text 'FEMENINO'
        // cy.get('#pr_id_3_list').contains(Idsexo).click();
        // cy.wait(1000)

        // cy.get('#p-tabpanel-0 > :nth-child(1) > .p-toolbar > .row > :nth-child(8) > .p-float-label > .p-inputwrapper > .p-dropdown > .p-dropdown-label').click()
        // cy.get('#pr_id_4_list').contains(IdGenero).click();
        // cy.wait(1000)

        // // Click on the element to open the dropdown
        // cy.get('#p-tabpanel-0 > :nth-child(1) > .p-toolbar > .row > :nth-child(9)').click();
        // cy.wait(1000)

        // // Click on the first item in the dropdown forcefully
        // cy.get('.p-dropdown-items').first().click({ force: true })
        // cy.wait(1000)
        // cy.get('.p-dropdown-items').contains(IdEtnica).click();
        // cy.wait(1000)
        // cy.get('#p-tabpanel-0 > :nth-child(1) > .p-toolbar > .row > :nth-child(10) > .p-float-label > .p-inputwrapper > .p-dropdown').click()
        // cy.get('#pr_id_6_list > :nth-child(1) > .p-ripple').type(IdEstadoCivil)
        // cy.wait(1000)
        // cy.get('#floatingTelefono').type(IdTelefono)
        // cy.wait(1000)
        // cy.get('#floatingCelular').type(IdCelular)
        // cy.get('#p-tabpanel-0 > :nth-child(1) > .p-toolbar > .row > :nth-child(13) > .p-float-label > #floatingEmail').type(IdEmail)
        // cy.wait(1000)
        // cy.get(':nth-child(14) > .form-floating > .p-float-label > .p-inputwrapper > .p-dropdown').type(IdDiscapacidad).type('{enter}');
        // cy.wait(1000)
        // cy.get('#floatingPorcentajeDiscapacidad').type(IdPorcentajeDiscapacidad);
        // cy.get(':nth-child(1) > .p-toolbar > .row > .col-lg-4 > .p-float-label > .p-inputwrapper > .p-dropdown').click()
        // cy.get('#pr_id_52_list > :nth-child(1) > .p-ripple').type(TipoDiscapacidad);
        // cy.wait(1000)

        //MATERNIDAD
        //cy.get(':nth-child(16) > .form-floating > .p-element > .p-inputswitch > .p-inputswitch-slider')
        //LACTANCIA
        //cy.get(':nth-child(17) > .form-floating > .p-element > .p-inputswitch > .p-inputswitch-slider')

        //LUGAR NACIMIENTO------------------------------------------------------------------------------------
        // cy.get('#floatingLugarNacimientoCanto').type(Idcanton)
        // cy.wait(1000);
        // cy.get('#floatingLugarNacimientoCuidad').type(Idciudad)
        // cy.wait(1000);
        // cy.get('#floatingLugarNacimientoParroquia').type(Idparroquia)
        // cy.wait(1000);

        //Datos de Recidencia---------------------------------------------------------------------------------------
        // cy.get(':nth-child(5) > .p-toolbar > .row > :nth-child(2) > .p-float-label > .p-inputwrapper > .p-dropdown')
        // .type(IdPais)
        // cy.get('#pr_id_8_list > .p-element.ng-star-inserted > .p-ripple').click()
        // cy.wait(1000);

        // cy.get(':nth-child(5) > .p-toolbar > .row > :nth-child(3) > .p-float-label > .p-inputwrapper > .p-dropdown').click();
        // cy.wait(500); // Esperar un tiempo breve para que la lista se despliegue
        // cy.get('#pr_id_9_list').contains(IdProvincia).click({ force: true });
        // cy.wait(500); // Esperar a que la selección se complete

        
        // cy.get(':nth-child(5) > .p-toolbar > .row > :nth-child(4) > .p-float-label > .p-inputwrapper > .p-dropdown').click();
        // cy.wait(500);
        // cy.get('#pr_id_10_list').contains(IdCanton2).click({forse: true });
        // cy.wait(1000)

        // cy.get(':nth-child(5) > .p-toolbar > .row > :nth-child(5) > .p-float-label > .p-inputwrapper > .p-dropdown').click();
        // cy.wait(500);
        // cy.get('#pr_id_11_list').contains(IdParroquia2).click({forse: true });
        // cy.wait(1000)
        
        // cy.get('#floatingCuidad').type(IdCiudad2)
        // cy.get('#floatingDireccion').type(IdDireccion)

        // cy.get(':nth-child(5) > .p-toolbar > .row > :nth-child(8) > .p-float-label > .p-inputwrapper > .p-dropdown').click();
        // cy.wait(500); // Espera para que la lista se despliegue
        // cy.get('#pr_id_12_list').contains(IdSector).click({ force: true }); // Corrección aquí
        // cy.wait(1000); // Espera para que la acción se complete


        // cy.get(':nth-child(5) > .p-toolbar > .row > :nth-child(9) > .p-float-label > .p-inputwrapper > .p-dropdown').click();
        // cy.get('#pr_id_13_list').should('be.visible');
        // cy.get('#pr_id_13_list').contains(opcionzona).should('exist').click({ force: true });

        // cy.get('#floatingRutaDomiciliaria').type(IdReferencia)
        // cy.get('#floatingEspecificacion').type(IdRuta)

        //Datos Educativos--------------------------------------------------------------------------------------------
        // cy.get(':nth-child(7) > .p-toolbar > .row > :nth-child(2) > .p-float-label > .p-inputwrapper > .p-dropdown').click();
        // cy.get('#pr_id_14_list').should('be.visible').contains(IdInstitucion).click();
        // cy.wait(2000)
        // cy.get(':nth-child(7) > .p-toolbar > .row > :nth-child(3) > .p-float-label > .p-inputwrapper > .p-dropdown').click()
        // cy.get('#pr_id_15_list > :nth-child(3) > .p-ripple').type(IdProfesion);
        // cy.wait(5000); 
        // cy.get('#floatingCelularContacto').type(IdDetalle)
        // cy.wait(2000)
    
        //Estudia Actualmente------------------------------------------------------------------------------------------
        // cy.get(':nth-child(5) > .form-floating > .p-element > .p-inputswitch > .p-inputswitch-slider').click()
        // cy.wait(2000)
        // cy.get('.col-12.ng-star-inserted > .p-float-label > #floatingCelularContacto').type(IdDetalle2)
        // cy.wait(1000)

        //Informacion Adicional------------------------------------------------------------------------------------------------------------
        //tiene tatuaje
        // cy.get(':nth-child(9) > .p-toolbar > .row > :nth-child(2) > .form-floating > .p-element > .p-inputswitch > .p-inputswitch-slider').click()
        // cy.get(':nth-child(3) > .p-float-label > #floatingCelularContacto').type(IdTatuaje)
        // cy.get(':nth-child(9) > .p-toolbar > .row > :nth-child(4) > .p-float-label > #floatingCelularContacto').type(IdCuerpo)
        //licencia de conducir
        // cy.get(':nth-child(9) > .p-toolbar > .row > :nth-child(4) > .form-floating > .p-element > .p-inputswitch > .p-inputswitch-slider').click()
        // cy.get('.col-12.ng-star-inserted > .p-float-label > .p-inputwrapper > .p-dropdown').click()
        // cy.get('#pr_id_52_list > :nth-child(2) > .p-ripple').type(licencia)



        // cy.get(':nth-child(9) > .p-toolbar > .row > :nth-child(6) > .p-float-label > .p-inputwrapper > .p-dropdown').click()
        // cy.get('#pr_id_16_list > .p-element.ng-star-inserted > .p-ripple').should('be.visible').contains(TipoSangre).click();    
        // cy.wait(1000)

        // //Informacion de Contacto----------------------------------------------------------------------------------------------------------
        // cy.get('.p-toolbar > .row > .col-md-3 > .p-element').click()
        // cy.get('.row > :nth-child(1) > .p-float-label > #floatingContacto').type(idname)
        // cy.get(':nth-child(2) > .p-float-label > #floatingDireccionContacto').type(idDireccion1)
        // cy.get('#floatingTelefonoContacto').type(idtelefonia)
        // cy.get('.section-table-container > .row > :nth-child(4) > .p-float-label > #floatingCelularContacto').type(idcell)
        // cy.get('.section-table-container > .row > :nth-child(5) > .p-float-label > .p-inputwrapper > .p-dropdown').click()
        // cy.get('.p-dropdown-filter').type(idpariente)
        // cy.get('#pr_id_52_list > .p-element.ng-star-inserted > .p-ripple').click()
        // cy.wait(1000)

        //SUBMODULE SOCIAL---------------------------------------------------------------------------------------------------------------------
     
        cy.get('#p-tabpanel-1-label').click();

        // //ENFERMEDAD
        // cy.get(':nth-child(1) > .p-toolbar > .row > :nth-child(2) > .form-floating > .p-element > .p-inputswitch > .p-inputswitch-slider').click()
        // cy.get(':nth-child(3) > .p-float-label > #floatingCelularContacto').type(IdEnfermedad)
        // cy.get(':nth-child(1) > .p-toolbar > .row > :nth-child(4) > .form-floating > .p-element > .p-inputswitch > .p-inputswitch-slider').click()
        // cy.get(':nth-child(5) > .p-float-label > #floatingCelularContacto').type(IdDonde)
        // cy.wait(1000)

        // cy.get(':nth-child(7) > .form-floating > .p-element > .p-inputswitch > .p-inputswitch-slider').click()
        // cy.get(':nth-child(8) > .p-float-label > #floatingCelularContacto').type(idtipoAlergia)
        // cy.wait(1000)

        // cy.get('.row > :nth-child(10) > .form-floating > .p-element > .p-inputswitch > .p-inputswitch-slider').click()
        // cy.get(':nth-child(11) > .p-float-label > #floatingCelularContacto').type(idaccidente)
        // cy.wait(1000)

        // cy.get(':nth-child(13) > .form-floating > .p-element > .p-inputswitch > .p-inputswitch-slider').click()
        // cy.get(':nth-child(14) > .p-float-label > #floatingCelularContacto').type(IdOperacion)
        // cy.wait(1000)

        // // DEPENDENCIA LABORAL

        // cy.get(':nth-child(3) > .p-toolbar > .row > :nth-child(2) > .p-float-label > .p-inputwrapper > .p-dropdown').click()
        // cy.get('#pr_id_17_list > :nth-child(1) > .p-ripple').type(Idtalla) // El selector real va aquí
        // cy.wait(1000);

        
        // cy.get(':nth-child(3) > .p-toolbar > .row > :nth-child(3) > .p-float-label > .p-inputwrapper > .p-dropdown').click()
        // cy.get('#pr_id_18_list > :nth-child(3) > .p-ripple').type(IdtallaPantalon)
        // cy.wait(1000)

        // cy.get('#p-tabpanel-1 > :nth-child(3) > .p-toolbar > .row > :nth-child(4) > .p-float-label > .p-inputwrapper > .p-dropdown').click()
        // cy.get('#pr_id_19_list > :nth-child(2) > .p-ripple').type(Idzapatos)
        // cy.wait(1000)

        // cy.get(':nth-child(1) > [style="text-align: center;"] > .p-element').click()
        // cy.wait(1000)

        // cy.get('.p-checkbox-box').click()
        // cy.wait(1000)

        // cy.get(':nth-child(3) > p-celleditor.p-element > .p-inputwrapper > .p-dropdown > .p-dropdown-trigger > .p-dropdown-trigger-icon').click()
        // cy.get('#pr_id_52_list > .p-element.ng-star-inserted > .p-ripple').first().type(talla);
        // cy.wait(1000)

        // cy.get(':nth-child(4) > p-celleditor.p-element > .p-inputwrapper > .p-dropdown > .p-dropdown-trigger').click()
        // cy.get('#pr_id_53_list > :nth-child(2) > .p-ripple').type(tipo)
        // cy.wait(1000)

        // cy.get('p-celleditor.p-element > .p-inputtext').clear().type(detalle)
        // cy.wait(1000)
        
        // // GUARDAR
        // cy.get('[style="text-align: center;"] > .p-button-success').click()
        // cy.wait(1000)
        // //CANCELAR
        // //cy.get('[style="text-align: center;"] > .p-button-warning').click()

        // //RECREACIÓN Y TIEMPO LIBRE
        // cy.get('.col-md-6 > .p-float-label > .p-inputwrapper > .p-multiselect > .p-multiselect-trigger > .p-multiselect-trigger-icon').click()
        // cy.get('.p-multiselect-header > .p-checkbox > .p-checkbox-box').should('be.visible').click();
        // cy.wait(3000)
        // cy.get(':nth-child(5) > .p-toolbar > .row > .col-md-4 > .form-floating > .p-element > .p-inputswitch > .p-inputswitch-slider').click()
        // cy.wait(1000)
        // cy.get('#floatingReligioso').type(IdReligion)

        //ASPECTO DE VIVIENDA
        // cy.get(':nth-child(7) > .p-toolbar > .row > :nth-child(2) > .p-float-label > #floatingNombre').type(N_vivienda)
        // cy.get(':nth-child(3) > .p-float-label > #floatingNombre').type(ComparteVivienda)
        // cy.wait(1000)

        // cy.get(':nth-child(7) > .p-toolbar > .row > :nth-child(4) > .p-float-label > .p-inputwrapper > .p-dropdown').click()
        // cy.get('#pr_id_21_list > :nth-child(2) > .p-ripple').type(TipoVivienda)
        // cy.wait(1000)

        // cy.get(':nth-child(7) > .p-toolbar > .row > :nth-child(5) > .p-float-label > .p-inputwrapper > .p-dropdown').click()
        // cy.get('#pr_id_22_list > :nth-child(1) > .p-ripple').type(Idtenencia)
        // cy.wait(1000)

        // cy.get(':nth-child(7) > .p-toolbar > .row > :nth-child(6) > .p-float-label > .p-inputwrapper > .p-dropdown').click()
        // cy.get('#pr_id_23_list > :nth-child(1) > .p-ripple').type(M_Construccion)
        // cy.wait(1000)

        // cy.get(':nth-child(7) > .p-toolbar > .row > :nth-child(7) > .p-float-label > .p-inputwrapper > .p-dropdown').click()
        // cy.get('#pr_id_24_list > :nth-child(1) > .p-ripple').type(condicion)
        // cy.wait(1000)

        cy.get(':nth-child(8) > .p-float-label > .p-inputwrapper > .p-multiselect > .p-multiselect-label-container').click()
        cy.get('.p-multiselect-header > .p-checkbox > .p-checkbox-box').click()
        cy.wait(1000)

        cy.get(':nth-child(9) > .p-float-label > .p-inputwrapper > .p-multiselect > .p-multiselect-label-container').click()
        cy.get('.p-multiselect-header > .p-checkbox > .p-checkbox-box').click({ multiple: true })
        cy.wait(1000)

        cy.get(':nth-child(10) > .p-float-label > .p-inputwrapper > .p-multiselect > .p-multiselect-label-container').click()
        cy.get('.p-multiselect-header > .p-checkbox > .p-checkbox-box').click({ force: true, multiple: true });
        cy.wait(1000)

        cy.get(':nth-child(11) > .p-float-label > .p-inputwrapper > .p-multiselect > .p-multiselect-label-container').click()
        cy.get('.p-multiselect-header > .p-checkbox > .p-checkbox-box').click({ multiple: true })
        cy.wait(1000)




    }); 
 
    
      
   

});
    



