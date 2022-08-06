import { useState } from "react";

function NewCounter() {

    //* ----->COUNT: COMO CLOUSER<-----
    // "count" tiene el valor con el QUE SE CONSTRUYO, no tiene el 
    // valor actual

    //? la asignación de estados iniciales, SÓLO SE HACE 1 VEZ, en el primer RENDER */
    const [count, setCount] = useState(0)   //count y count2 HACEN LO MISMO
    const [count2,setCount2]=useState(0)    //pero en DISTINTOS CONTADORES, MÁS ABAJO SE VERÁ
    
    return (  
      <>
        <div >
          <h1>COUNT with setTimeOut TO EXPLAIN setCount with a FUNCTION as an ARGUMENT </h1>
          <h1>Old way:{count}</h1>
          <button onClick={
            /* setCount cambia el estado de count en 5 segundos */
            /* Si le damos Click al button varias veces, en ese intervalo de 5 segundos 
               el "count" jamás cambiará, sin EMBARGO setTimeOut no bloquea el único HILO de JS 
            */
            
            /* 
              Como "count" tiene el valor con el que se renderizó EL COMPONENTE,
              en consola SIEMPRE se verá count+1,sin CAMBIAR  a count+2, count+3, lo anterior
              DURANTE EL INTERVALO que dura setTimeOut (5 seg). Después de esos 5 SEGUNDOS 
              se ACTUALIZA EL ESTADO(count), SE RENDERIZA LA APLICACIÓN y ahora se mostrará 
              un NUEVO VALOR EN CONSOLA.*/
            //* ----->RECOMENDACIÓN CON FUNCIONES DE TIEMPO (setTimeOut, setInterval)<-----
            /* 
              Utilizar FUNCIONES COMO ARGUMENTOS en el setState(setCount() en este caso)
              para que se utilice o se modifique el VALOR de LA VARIABLE DE ESTADO 
              ACTUAL, en lugar del valor de COUNT con el que se RENDERIZÓ, el cual es ESTÁTICO

              Como en la línea 67

            */  

            ()=>{
              console.log("actualizando, COUNT VALE: "+count);
              setTimeout(()=>setCount(count+1),5_000)
            }
            
          }
              
          >+1</button>
        </div>

        <div>
        <h1>COUNT with setTimeOut TO EXPLAIN setCount with a FUNCTION as an ARGUMENT </h1>
          <h1>Old way:{count2}</h1>
          <button onClick={

            //* ----->RECOMENDACIÓN CON FUNCIONES DE TIEMPO (setTimeOut, setInterval)<-----
            /* 
              Utilizar FUNCIONES COMO ARGUMENTOS en el setState(setCount() en este caso)
              para que se utilice o se modifique el VALOR de LA VARIABLE DE ESTADO 
              ACTUAL, en lugar del valor de COUNT cuando se renderizó,

              Como en la línea 67
            */  

            ()=>{
              console.log("actualizando, COUNT VALE: "+count2);
              setTimeout(()=>setCount2(c=>c+1),5_000) /* SE PUEDE poner "c" en lugar de "counter2" por que setCounter2 ya sabe a qué counter nos referimos */
            }
            
          }
              
          >+1</button>

        </div>
        
      </>
    );
  }
  
  export default NewCounter;