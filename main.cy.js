
import { describe } from "mocha";
import ClaseCobranza from "./cypress/e2e/Module Recaudaciones/CobranzaTest";

class ClaseTest{
    static realizarTestCobranza(){
        describe('COBRANZA', () =>{
            ClaseCobranza.ejecutarPrueba();
        })
    }


}

