
import ClaseCobranza from "./Module Recaudaciones/CobranzaTest";
import ClaseRecaudaciones from "./Module Recaudaciones/RecaudacionesTest";

const testName = prompt('Ingrese el nombre de la prueba (cobranza o recaudaciones):');
if (testName === 'cobranza') {
  ClaseCobranza.ejecutarPrueba();
} else if (testName === 'recaudaciones') {
  ClaseRecaudaciones.realizarPrueba();
} else {
  console.error('Por favor, ingrese un nombre de prueba válido (cobranza o recaudaciones)');
  process.exit(1);
}

