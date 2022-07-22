/* -->MAP Y FILTER<--- */
/* Funciones con argumentos que son otra función */

const names= [
    {nombre:"Alberto Peña",edad:54},
    {nombre: "Alberto Peña Jr.",edad:21},
    {nombre:"Vicenta Atanasio",edad:54},
    {nombre:"Gabriela Peña",edad:11}
]


const getMayorEdad = (x)=>x.edad<=50;


/* FILTER --> Llama a la función callback "getMayorEdad" 
              sobre cada elemento del ARREGLO "names" Y
              RETORNA UN NUEVO ARREGLO CON LOS ELEMENTOS QUE CUMPLAN
              LA CONDICIÓN de la función CALLBACK
              */

/* CALLBACK FUNCTION: Función que es ocupada como parámetro 
   de otra función 
*/
/* const mayorDeEdad=names.filter(getMayorEdad) */    /* Primera forma, función CALLBACK previamente declarada */

/* const mayorDeEdad=names.filter(x=>x.edad<=50) */   /* Segunda forma, función CALLBACK no DECLARADA previamente */

const mayorDeEdad=names.filter(({edad})=>edad<=50)                /* Tercera forma: HOSTING + Segunda forma */
console.log("Las personas menores a 50 años son: ")
console.log(mayorDeEdad)


/* ---->MAP <--- */
/*  
    -MAP hace modificaciones a cada uno de los elementos del array
    ayudandose de la función CALLBACK. 
    
    -MAP es como un FOR EACH que hace MODIFICACIONES A CADA ELEMENTO DEL ARRAY

    NOTA:No es como FILTER que retorna todos los elementos que 
    cumplan la condición, MAP sólo retorna un elemento modificado.
    Por eso es que tiene más procesamiento 
*/
console.log("\n------------------------------------------------------\n")
console.log("Nombre en mayúsculas de las personas menores a 50 años: ")
const mayusMay18=mayorDeEdad.map((person)=>{
    person.nombre=person.nombre.toUpperCase()
    return person;
})
console.log(mayusMay18)

