/* 
    --->REFERENCIA Y COPIA EN JS <---

    A JavaScript le encanta crear referencias EN ARREGLOS Y OBJETOS PRINCIPALMENTE.
    En numbers, strings y booleanos, JS se comporta como COPIA y no Como referencia 

*/

const obj1={
    name:"Beto",
    age:21
}

/* El copiado de arreglos es por REFERENCIA */
/* 
    Si no se ocupa el spread operator(...arr) y si hacemos esto obj2=obj1 
    en su lugar, lo que hacemos es una referencia a obj1. 
    Es decir, si modificamos una propiedad desde obj1 afectará a obj2 directamente 
    y viceversa también. 
*/
const obj2=obj1;
console.log('---->PROBANDO LAS REFERENCIAS EN ARREGLOS Y OBJETOS <---')
console.log("Objeto2 sin modificación:")
console.log(obj2)
obj1.name="Juan"
console.log()
console.log("Objeto2 modificado desde Objeto1:")
console.log(obj2)

const obj3={
    name:"Pedro",
    age:21
}

/* Se hace una copia del obj4, no se hace una REFERENCIA */
const obj4 = {...obj3};
console.log("\n\n>>USANDO SPREAD OPERATOR EN OBJETOS<<")
console.log("Objeto4 sin modificación y obj3 que copia el obj4:")
console.log(obj4)
console.log(obj3)
obj3.name="Pablo"
console.log()
console.log("Objeto4 sin ninguna modificación, pero sí se modifica objeto3:")
console.log(obj4)
console.log(obj3)

console.log("\n\n>>USANDO SPREAD OPERATOR EN ARRAYS<<")
const arr1=[4,5,6]
const arr2=[3,...arr1,7]    /* Se puede hacer esto tambie´n */
console.log(arr2)


/* 

----> PRIMITIVOS(number, string y boolean) <----- 
    Se COPIAN por valor y no se crea una referencia. Esto es raro, 
    especialmente en los strings, por que en Java, por ejemplo,
    las STRINGS se copian por REFERENCIA
*/

let string1="Hola"
let string2=string1

console.log("\n\n---->COPIANDO VALORES PRIMITIVOS <---")
console.log(string1)
console.log(string2)
string2="Holu"
console.log('\n >>Haciendo modificaciones <<')
console.log(string1)
console.log(string2)