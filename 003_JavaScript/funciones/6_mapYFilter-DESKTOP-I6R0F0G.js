/* -->MAP Y FILTER<--- */
/* Funciones con argumentos que son otra función */

const names= [
    {nombre:"Alberto Peña",edad:54},
    {nombre: "Alberto Peña Jr.",edad:21},
    {nombre:"Vicenta Atanasio",edad:54},
    {nombre:"Gabriela Peña",edad:11}
]

function getMayorEdad()

const mayorDeEdad=names.filter(({edad})=>edad>18)

console.log(mayorDeEdad)