/* ---> TIPOS DE DATOS EN TYPESCRIPT */
/* TYPESCRIPT no puede ser ejecutado en la terminal de NODE */
/* Debemos ocupar BABEL y ejecutar el .JS que nos genere */
// const data:string=1 Sería un error
// nombreDeVariable:tipoDeDato
const data:string ="Alberto"

/* TIPOS DE DATO en una FUNCIÓN */
const duplicate =(x:number):number =>{
    return x*2;
}

// duplicate("Incorrecto") Incorrecto 
duplicate(4)/* Correcto */


/* --->TIPOS DE DATO EN UN ARREGLO <--- */
const nums: number[]=[1,2,3,4,5]    /* First Way */
const nums2: Array<number> = [9,8,7,6]  /* Segunda forma */
const names: Array<string> = ["Alberto","Gaby"]

/* Arreglo con tipos de datos específicos */
const keyValue:[number,string]=[1,"Juan"] 


/* --->TIPOS DE DATO en OBJETOS <---- */
/* Esto es como una estructura o un Tipo de Dato nuevo */
interface User{
    age:number,
    name:string,
    phoneNumber?:string /* "?" ---> Significa que puede o no tener el phoneNumber */
}

const userData = {
    "name":"juan",
    "age":24
}

const printAge = (data:User)=>{
    
    const dataToPrint=`${data.name}, ${data.age}, ${data.phoneNumber??"No Number"}`
    console.log(dataToPrint)
}

printAge(userData)

/* ---> VARIABLE QUE SÓLO TOMA CIERTOS VALORES <--- */
const userStatus: "offline" | "online" = "offline" /* User status puede ser sólo offline y online */
                                                   /* No puede tomar ningún otro valor */

const userStatus2: number | string = 1/* "|" --> "O" */ /* Número O Cadena */

const userStatus3: {name:string}|string={name:"A"} /* Objeto con una propiedad STRING o STRING */

