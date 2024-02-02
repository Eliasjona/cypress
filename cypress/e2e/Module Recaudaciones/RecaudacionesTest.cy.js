
class ClaseRecaudaciones {
  static realizarPruebaRecaudaciones() {
    describe('RECAUDACIONES', () => {
      before(() => {
        cy.document().then((doc) => {
          cy.wrap(doc.documentElement.outerHTML).as('interfazHTML');
          ClaseRecaudaciones.ingresarRecaudaciones();
          const idmodule = prompt('Ingrese el nombre del módulo a probar (por ejemplo, VENTAS):');
          if (idmodule) {
            cy.get('.p-inputtext').eq(0).type(idmodule, { force: true });
            cy.wait(3000);
          } else {
            console.error('Debe ingresar un nombre de módulo válido.');
          }
        });
      });

      it('Edita recaudacion', () => {
        const accion = prompt("Ingrese la acción que desea realizar (VISUALIZAR, EDITAR, DISTRIBUIR):");
    
        // Verificar si se ingresó una acción válida
        if (accion && (accion === 'VISUALIZAR' || accion === 'EDITAR' || accion === 'DISTRIBUIR')) {
            // Si la acción es 'EDITAR' o 'DISTRIBUIR', solicitar los datos adicionales
            if (accion === 'EDITAR' || accion === 'DISTRIBUIR') {
                const floatingNreferencia = prompt('N° referencia');
                const Idmonto = prompt('Ingresa el monto');
                const index = prompt("Por favor, ingresa el índice del elemento que deseas seleccionar (empezando desde 1 RTS, 2 OTROS):");
                const desiredBankName = prompt("Por favor, ingresa el nombre del banco que deseas seleccionar:");
                const numeroRecaudacion = prompt("Ingrese el número de la recaudación:");
                // Llamar a la función editarRecaudacion con los datos proporcionados
                ClaseRecaudaciones.editarRecaudacion(floatingNreferencia, Idmonto, index, desiredBankName, accion, true, numeroRecaudacion);
            } else {
                // Si la acción es 'VISUALIZAR', llamar a la función sin datos adicionales
                ClaseRecaudaciones.editarRecaudacion(null, null, null, null, accion, true);
            }
        } else {
            alert("Acción no válida. Por favor, ingrese una acción válida.");
        }
    });

      // it('Agrega Recaudacion', () => {
      //   const floatingNreferencia = prompt('N° referencia');
      //   const Idmonto = prompt('Ingresa el monto');
      //   // Pedir al usuario que ingrese el índice del elemento que desea seleccionar
      //   const index = prompt("Por favor, ingresa el índice del elemento que deseas seleccionar (empezando desde 1 RTS, 2 OTROS):");
      //   const desiredBankName = prompt("Por favor, ingresa el nombre del banco que deseas seleccionar:");
      //   ClaseRecaudaciones.registrarRecaudacion(floatingNreferencia, Idmonto,index,desiredBankName);
      // });

      
      after(() => {
        // Acciones de limpieza, si es necesario
      });
    });
  };

  static ingresarRecaudaciones() {
    cy.get('@interfazHTML').then((_interfazHTML) => {
      cy.get('form').submit(); 
      cy.document().then((doc) => {
        cy.wrap(doc.documentElement.outerHTML).as('interfazHTML');
        // Agregar lógica para ingresar a la interfaz y navegar a la sección de recaudaciones
        cy.get('.ng-tns-c62-11.layout-root-menuitem').click()
          cy.wait(2000)
          cy.get('.ng-tns-c62-13.ng-tns-c62-11 > .ng-star-inserted').click()
          cy.wait(1000)
          cy.get('.layout-menu-button > .pi').click()
          cy.wait(1000)

      });
    });
  }

  // static registrarRecaudacion(floatingNreferencia, Idmonto,index,desiredBankName) {
  //   if (!floatingNreferencia || !Idmonto || !index || !desiredBankName) {
  //     console.error('Debe ingresar todos los valores correspondientes');
  //     return;
  //   }

  //   cy.get('@interfazHTML').then((_interfazHTML) => {
      
  //     cy.get('[ptooltip="New Register"] > .p-ripple', { timeout: 10000 }).click();
  //     cy.wait(1000);
  
  //     cy.get(':nth-child(2) > .p-float-label > .p-inputwrapper > .p-dropdown > .p-dropdown-trigger').click();
  //     cy.wait(1000);

  //     // Validar que el índice ingresado sea un número válido
  //     if (!isNaN(index) && index >= 1) {
  //       // Hacer clic en el elemento correspondiente al índice ingresado
  //       cy.get(`#pr_id_6_list > :nth-child(${index}) > .p-ripple`).click();
  //     } else {
  //       // Si el índice no es válido, mostrar un mensaje de error
  //       alert("Índice no válido. Por favor, ingresa un número válido.");
  //     }

  //     cy.wait(1000);

  //     cy.get('#floatingNreferencia').type(floatingNreferencia);
  //     cy.wait(1000);
  //     cy.get('.p-inputnumber > .p-inputtext').type(Idmonto);
  //     cy.wait(1000);
      
  //     // Validar si se ingresó un nombre de banco
  //     if (desiredBankName) {
  //       cy.get('.md\\:col-8 > .p-float-label > .p-inputwrapper > .p-dropdown > .p-dropdown-trigger').click();
  //       cy.wait(1000);

  //       // Obtener la lista de nombres de los bancos
  //       cy.get('.p-dropdown-items-wrapper').find('.p-dropdown-item').then(banks => {
  //         // Buscar el elemento de la lista que corresponde al nombre del banco deseado
  //         const bankElement = banks.toArray().find(element => {
  //           return element.innerText.trim() === desiredBankName;
  //         });

  //         // Verificar si se encontró el elemento del banco deseado
  //         if (bankElement) {
  //           // Hacer clic en el elemento del banco deseado
  //           cy.wrap(bankElement).click();
  //         } else {
  //           // Si el banco deseado no se encuentra en la lista, mostrar un mensaje de error
  //           alert(`El banco "${desiredBankName}" no se encontró en la lista.`);
  //         }
  //       });

  //       cy.wait(1000);
  //     } else {
  //       // Si no se ingresó un nombre de banco, mostrar un mensaje de error
  //       alert("Debes ingresar un nombre de banco.");
  //     }

  //     cy.get('.p-dialog-footer > .p-element.ng-star-inserted').click()
  //     cy.wait(1000);
  //   });
  // }

  static editarRecaudacion(floatingNreferencia, Idmonto, index, desiredBankName, accion, finalizar, numeroRecaudacion = true) {
    if (!floatingNreferencia || !Idmonto || !index || !desiredBankName || !numeroRecaudacion) {
        console.error('Debe ingresar todos los valores correspondientes');
        return;
    }

    if (numeroRecaudacion) {
        cy.get('@interfazHTML').then((_interfazHTML) => {
            
            cy.get(`tbody > :nth-child(${index}) > .cdk-column-Actions`).click();
            cy.wait(1000);
            cy.get('.table-container').contains('td', numeroRecaudacion).parent('tr').find('.cdk-column-Actions').click();
            cy.wait(1000);

            // Realizar la acción específica después de hacer clic en el botón de editar
            switch (accion) {
                case 'VISUALIZAR':
                    cy.get('.mat-menu-content > :nth-child(1)').click();
                    console.log('Se va a visualizar la recaudación');
                    cy.wait(1000)
                    break;
                case 'EDITAR':
                    cy.get('.mat-menu-content > :nth-child(2)').click();
                    console.log('Se va a editar la recaudación');
                    // Si se desea finalizar la edición
                    if (finalizar) {
                        // Lógica para editar la recaudación
                    } else {
                        console.log('Edición no finalizada');
                    }
                    break;
                case 'DISTRIBUIR':
                    cy.get('.mat-menu-content > :nth-child(3)').click();
                    console.log('Se va a distribuir la recaudación');
                    // Si se desea finalizar la distribución
                    if (finalizar) {
                        // Lógica para distribuir la recaudación
                    } else {
                        console.log('Distribución no finalizada');
                    }
                    break;
                default:
                    console.error('La acción especificada no es válida.');
                    return;
            }
        });
    } else {
        alert("Número de recaudación no válido. Por favor, ingrese un número válido.");
    }
}
}

export default ClaseRecaudaciones;

