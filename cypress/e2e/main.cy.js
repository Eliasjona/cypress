import ClaseCobranza from "./Module Recaudaciones/CobranzaTest";
import ClaseRecaudaciones from "./Module Recaudaciones/RecaudacionesTest";
import ClaseDistribucion from "./Module Recaudaciones/DistribucionTest";
import ClaseLogin from "./Login/login";

describe('Suite Principal', () => {
  it('Realiza la prueba de login y ejecuta otra prueba según la opción', async () => {
    await ClaseLogin.ingresoLogin();

    const testName = prompt('Ingrese el nombre de la prueba (cobranza - recaudaciones - DT)');

    if (testName === 'cobranza') {
      ClaseCobranza.ejecutarPrueba();
    } else if (testName === 'recaudaciones') {
      ClaseRecaudaciones.realizarPrueba();
    } else if (testName === 'DT') {
      ClaseDistribucion.realizarPrueba();
    } else {
      console.error('Por favor, ingrese un nombre de prueba válido (cobranza o recaudaciones)');
      throw new Error('Nombre de prueba no válido');
    }
  });
});

