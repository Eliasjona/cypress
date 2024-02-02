
describe('LOGIN', () => {
  beforeEach(() => {
    // Puedes realizar acciones antes de cada caso de prueba si es necesario
  });

  // it('Intento de inicio de sesión con usuario incorrecto', () => {
  //   ClaseLogin.ingresoLogin('jheredia', 'Eli96Apo', 'FADHI');
  //   cy.get(':nth-child(7) > .p-ripple').click();
  //   cy.get('.p-fluid > .text-center').click();
  //   cy.wait(1000)
  //   // Agregar verificaciones adicionales según sea necesario
  // });

  // it('Intento de inicio de sesión con contraseña incorrecta', () => {
  //   ClaseLogin.ingresoLogin('jurina', 'Julio1984', 'PROCAMARONEX');
  //   cy.get(':nth-child(1) > .p-ripple').click();
  //   cy.get('.p-fluid > .text-center').click();
  //   // Agregar verificaciones adicionales según sea necesario
  //   cy.wait(1000)
  // });

  // it('Intento de inicio de sesión sin seleccionar una empresa', () => {
  //   cy.on('uncaught:exception', (err, runnable) => {
  //     // Capturar y manejar la excepción en lugar de permitir que la prueba falle
  //     expect(err.message).to.include('Debe seleccionar una empresa válida');
  //     return false;
  //   });

  //   ClaseLogin.ingresoLogin('jurina', 'Eli96Apo', '');
  //   cy.get('.p-fluid > .text-center').click();
  //   // Agrega las verificaciones necesarias para confirmar que el error es el esperado
  //   cy.wait(1000)
  // });
  

  // it('Ingreso exitoso al sistema después del intento fallido', () => {
  //   ClaseLogin.ingresoLogin('jurina', 'Eli96Apo', 'PROCAMARONEX');
  //   cy.get(':nth-child(1) > .p-ripple').click();
  //   cy.get('.p-fluid > .text-center').click();
  //   // Agregar verificaciones adicionales según sea necesario
  //   cy.wait(1000)
  // });
  

  // it('Ingreso exitoso al sistema', () => {
  //   ClaseLogin.ingresoLogin('jurina', 'Eli96Apo', 'PROCAMARONEX');
  //   cy.get(':nth-child(1) > .p-ripple').click();
  //   cy.get('.p-fluid > .text-center').click();
  //   // Agregar verificaciones adicionales según sea necesario
  //   cy.wait(1000)
  //   cy.document().then((doc) => {
  //     cy.wrap(doc.documentElement.outerHTML).as('interfazHTML');
  //   });
  // });
 
});

class ClaseLogin {
  static isLoggedIn = false;


  static ingresoLogin(user = 'jurina', password = 'Eli96Apo', empresa = 'PROCAMARONEX') {
    //ClaseLogin.isLoggedIn = false; // Reiniciar el estado de inicio de sesión
    cy.visit('http://172.16.11.24:7200/guest/sign-in');

    // Alias para elementos Cypress
    const usernameInput = cy.get('#floatingUsername');
    const passwordInput = cy.get('.p-password > .p-inputtext');
    const empresaDropdown = cy.get('#floatingOP > .p-dropdown > .p-dropdown-label');

    // Ingresar usuario
    usernameInput.type(user);

    // Ingresar contraseña
    passwordInput.type(password);

    // Seleccionar empresa
    empresaDropdown.type(empresa);
    cy.get('.p-ripple').click();
      cy.get('.p-fluid > .text-center').click();

    // Verificar y obtener datos del localStorage
    // cy.window().then((win) => {
    //   const accessToken = win.localStorage.getItem('access_token');
    //   cy.log('access_token:', accessToken);
    //   const litPaths = win.localStorage.getItem('list_paths');
    //   cy.log('list paths:', litPaths);
    // });
    // cy.wait (5000);
    cy.document().then((doc) => {
      cy.wrap(doc.documentElement.outerHTML).as('interfazHTML');
    });
  }
}

export default ClaseLogin;


