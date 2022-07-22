/* En Javascript se puede crear una función de varias formas */

/* -->FORMA ANTIGUA<--- */

function doble(a){
    return a*2;
}

/* --->ARROW FUNCTION EXTENDIDA<--- */

const dobleAFE = (a)=>{
    return a*2;
}

/* --->ARROW FUNCTION REDUCIDA <--- */
const dobleAFR = a=>a*2;    /* Se puede omitir la palabra reservada RETURN, SÓLO cuando se va a hacer un RETURN, sin ninguna otra instrucción */
                            /* Si sólo se pasa un parámetro, ESTE SE PUEDE OMITIR */



/* --->PARÁMETROS POR DEFECTO <--- */
const defaultParameter=(user='Cliente')=> `Hola ${user}`  /* Si no mandan el valor de un parámetro, se ocupará el valor "Cliente" por defecto*/                          

console.log(`Doble con función antigua: ${doble(4)}`)
console.log(`Doble con arrow function EXTENDIDA: ${dobleAFE(4)}`)
console.log(`Doble con arrow function REDUCIDA: ${dobleAFR(4)}`)
console.log(defaultParameter())
console.log(defaultParameter('Gaby'))


/* --> EXPORT <-- */
/* Es recomendable que vayan hasta el final de nuestros archivos */
export {dobleAFR}   /* Esto sirve para los módulos "4_modulos.js" */
