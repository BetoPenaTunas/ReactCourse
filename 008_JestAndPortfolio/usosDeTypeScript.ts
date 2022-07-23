
/* --->NUEVO TIPO DE DATO <--- */
/* Creando un nuevo tipo de dato */
type Student ={
    id:string,
    name:string,
    description:string
}

/* --->INTERFAZ CON PROPIEDADES DEL OBJETO RESPONSE<--- */
/* Es como crear un nuevo tipo de dato */
/* Esta interface se hace para reconocer qué tipo de propiedades 
   retorna el objeto response, resultado de llamar a fetch()
   Se pueden por las propiedades que se deseen 

    ---> SE ESTÁ TIPANDO el OBJETO RESPONSE
*/
interface IResponse{

    success:boolean, 
    result: Student[]

}

const getData =async ()=>{
    const response = await fetch("")
    /* Response.json() retorna un Objeto Javascript (promesa) */
    /* NO RETORNA UN JSON Como tal */
    const data:IResponse = await response.json();   /* Aquí se TIPEA la RESPUESTA */

    if(data.success){
        console.log(data.result[0].name)

    }
}

/* --->SE PUEDEN TIPAR FUNCIONES TAMBIÉN <--- */
const createCard =(elem:Student): string =>{
    return `<p>${elem.name}`;
}

