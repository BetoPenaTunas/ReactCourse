
/* Para poder importar un archivo, este debe ser ".mjs" */
/* Este archivo también debe ser .mjs para que funcione */
import { dobleAFR } from "./1_normalAndArrowFunction.js";
import * as destruct from "./2_destructuring.js";  /* IMPORTANDO TODO lo que se EXPORTA desde el otro ARCHIVO */

console.log("Usando la función dobleAFR, desde otro archivo: "+dobleAFR(2))
console.log("\n-->DATOS IMPORTADOS DEL ARCHIVO 2_destructuring.js <--")
console.log(destruct.datos)
console.log(destruct.nombre)
console.log(destruct.apellido)
console.log(destruct.edad)