/* ---> ARCHIVO .JS CONVERTIDO CON BABEL <---- */

"use strict";

/* ---> TIPOS DE DATOS EN TYPESCRIPT */
// const data:string=1 Sería un error
// nombreDeVariable:tipoDeDato
const data= "Alberto";
/* TIPOS DE DATO en una FUNCIÓN */

const duplicate = x => {
  return x * 2;
}; // duplicate("Incorrecto") Incorrecto 


duplicate(4);
/* Correcto */

/* --->TIPOS DE DATO EN UN ARREGLO <--- */

const nums = [1, 2, 3, 4, 5];
/* First Way */

const nums2 = [9, 8, 7, 6];
/* Segunda forma */

const names = ["Alberto", "Gaby"];
/* Arreglo con tipos de datos específicos */

const keyValue = [1, "Juan"];
/* --->TIPOS DE DATO en OBJETOS <---- */

/* Esto es como una estructura o un Tipo de Dato nuevo */

const userData = {
  "name": "juan",
  "age": 24
};

const printAge = data => {
  var _data$phoneNumber;

  const dataToPrint = `${data.name}, ${data.age}, ${(_data$phoneNumber = data.phoneNumber) !== null && _data$phoneNumber !== void 0 ? _data$phoneNumber : "No Number"}`;
  console.log(dataToPrint);
};

printAge(userData);
/* ---> VARIABLE QUE SÓLO TOMA CIERTOS VALORES <--- */

const userStatus = "offline";
/* User status puede ser sólo offline y online */

/* No puede tomar ningún otro valor */

const userStatus2 = 1;
/* "|" --> "O" */

/* Número O Cadena */

const userStatus3 = {
  name: "A"
};
/* Objeto con una propiedad STRING o STRING */