/* -->DESTRUCTURING<-- */
/* 
    Asignar referencias o nombres de variables 
    a elementos de un arreglo
*/

/*Primero se necesita un array  */
const datos=["Gabriela","Peña",11]

/* ---> Esto es DESTRUCTURING <--- */
const[nombre,apellido,edad]=datos

/*  
    
    Puedo ver el nombre de las variables 
    en la CONSOLA DEL NAVEGADOR con el documento HTML asociado

*/

console.log("-->Datos con DESTRUCTURING<--\n")
console.log("Nombre: "+nombre)
console.log("Apellido: "+apellido)
console.log("Edad: "+edad)


/* 
    Cuidado al ordenar elementos, está RARO
*/

export{datos,nombre,apellido,edad}