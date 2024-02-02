import ClaseCobranza from "./Module Recaudaciones/CobranzaTest.cy";
import ClaseRecaudaciones from "./Module Recaudaciones/RecaudacionesTest.cy";
import ClaseDistribucion from "./Module Recaudaciones/DistribucionTest";
import ClaseLogin from "./Login/login";

describe('Suite Principal', () => {
  it('Realiza la prueba de login y ejecuta otra prueba según la opción', () => {
    try {
      
      ClaseLogin.ingresoLogin();

      const testName = prompt('Ingrese el nombre de la prueba (cobranza - recaudaciones - dt)');
      if (!testName) {
        console.error('Por favor, proporcione un nombre de prueba válido (cobranza, recaudaciones o dt)');
        throw new Error('Nombre de prueba no proporcionado');
      }
      
      // Ejecutar la prueba correspondiente según el nombre ingresado
      switch (testName.toLowerCase()) {
        case 'cobranza':
          ClaseCobranza.realizarPruebaCobranza();
          break;
        case 'recaudaciones':
          ClaseRecaudaciones.realizarPruebaRecaudaciones();      
          break;
        case 'dt':
          ClaseDistribucion.realizarPrueba();
          break;
        default:
          console.error('Por favor, ingrese un nombre de prueba válido (cobranza, recaudaciones o dt)');
          throw new Error('Nombre de prueba no válido');
      }
    } catch (error) {
      console.error('Ocurrió un error:', error.message);
      throw error;
    }

  });
});



