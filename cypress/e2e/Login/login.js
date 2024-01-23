describe('LOGIN', () => {
  it('Ingreso exitoso al sistema', () => {
    ClaseLogin.ingresoLogin('jurina', 'Eli96Apo', 'PROCAMARONEX');
    // Agregar verificaciones adicionales según sea necesario
  });

  it('Intento de inicio de sesión con usuario incorrecto', () => {
    ClaseLogin.ingresoLogin('jheredia', 'Eli96Apo', 'FADHI');
    // Agregar verificaciones adicionales según sea necesario
  });

  it('Intento de inicio de sesión con contraseña incorrecta', () => {
    ClaseLogin.ingresoLogin('jurina', 'Julio1984', 'PROCAMARONEX');
    // Agregar verificaciones adicionales según sea necesario
  });

  it('Intento de inicio de sesión sin seleccionar una empresa', () => {
    try {
      ClaseLogin.ingresoLogin('jurina', 'Eli96Apo', '');
    } catch (error) {
      // Agrega las verificaciones necesarias para confirmar que el error es el esperado
      cy.log('Error esperado:', Error);
      // Agrega verificaciones adicionales según sea necesario
    }
  });
});

class ClaseLogin {
  static ingresoLogin(user, password, empresa) {
    cy.visit('http://172.16.11.24:7200/guest/sign-in');

    // Alias para elementos Cypress
    cy.get('#floatingUsername').as('usernameInput');
    cy.get('.p-password > .p-inputtext').as('passwordInput');
    cy.get('#floatingOP > .p-dropdown > .p-dropdown-label').as('empresaDropdown');

    // Ingresar usuario
    if (user) {
      cy.get('@usernameInput').type(user);
    } else {
      throw new Error('Debe ingresar un usuario válido');
    }

    // Ingresar contraseña
    if (password) {
      cy.get('@passwordInput').type(password);
    } else {
      throw new Error('Debe ingresar una contraseña válida');
    }

     cy.get('#floatingOP > .p-dropdown > .p-dropdown-trigger').click();

    // Seleccionar empresa
    if (empresa !== '') {
      cy.get('@empresaDropdown').type(empresa);
      cy.get('.p-fluid > .text-center').click();
    } else {
      throw new Error('Debe seleccionar una empresa válida');
    }


    // Verificar y obtener datos del localStorage
    cy.window().then((win) => {
      const accessToken = win.localStorage.getItem('access_token');
      cy.log('access_token:', accessToken);
      const litPaths = win.localStorage.getItem('list_paths');
      cy.log('list paths:', litPaths);
    });
  }
}

export default ClaseLogin;

