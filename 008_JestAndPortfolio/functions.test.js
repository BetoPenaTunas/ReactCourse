/* Este DEBBUGGER de funciones es posible 
    gracias a la librería "JEST"
    PARA SABER MÁS ACERCA DE JEST, ir al siguiente LINK:
    https://jestjs.io/
    
    Todo este código funciona al ejecutar en consola el comando:
    yarn run jest
*/


/* Importando la función */
const {isVowel,doubleArray }= require("./functions")

/* Ejecutando una función de JEST  */
test('Any name, Asking if "a" is a vowel',()=>{
    /* Expect es lo que se espera, se espera un TRUE */
    /* Esto se verá en consola, si "isVowel" retorna TRUE 
       entonces se imprimirá en CONSOLA DE color verde 
       Caso contrario, se imprimirá de COLOR ROJO
    */
    expect(isVowel("a")).toBe(true)
})

/* .toBe() --> Sirve sólo para  DATOS PRIMITIVOS,NO SERIALIZABLES*/
test('Any name, Asking if "c" is a vowel',()=>{
    expect(isVowel("c")).toBe(true)
})

/* .toEqual() --> Sirve para DATOS NO PRIMITIVOS, SERIALIZABLES */
/*                COMO ARREGLOS */
test("Test the function with an array",()=>{
    
    /* CASE 1:  */
    const arr1= [3,4,6]
    expect(doubleArray(arr1)).toEqual([6,8,12])
})



