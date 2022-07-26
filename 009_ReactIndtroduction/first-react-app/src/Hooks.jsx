import { useState } from "react";

const Hooks =() =>{ 
    //useState Siempre va al principio del COMPONENTE (Hooks.jsx)

    // ESTADO: Variable que MANTIENE su valor entre 
    // render y render(actualización del COMPONENTE) 

    //FIRST HOOK: useState es una función de React, que se debe importar 
    // useState retorna un ARRAY
    // 0 es un valor inicial del estado 

    // "useState" retorna el estado actual=0 y una función
    // que actualiza el estado y Re-renderiza (Actualiza el componente o INTERFAZ HTML)
    
    // counter es CONSTANTE, no se puede modificar directamente SU VALOR, pero sí su ESTADO
    // counter se modifica a través de la función setCounter
    // "setCounter" cambia el estado de "counter", ES UNA CAJA NEGRA que se puede ver como que
    // "setCounter" accede a una COPIA DE LA VARIABLE DE ESTADO de "setCounter"
    
    const [counter,setCounter] =useState(0)     //Se está haciendo Array Destructuring
    
    const  add = () =>{
        setCounter(counter+1)
    }

    const substract = ()=>{
        setCounter(counter-1)
    }


    return (
        <>
            <h1>This is a counter with React</h1>
            <h2>{counter}</h2>
            {
                //add apunta a una función que ya se ejecuta
                //Recordar que estamos con JS y no con HTML, por eso
                //onClick se escribe en camel case

                // ()=> setCounter(0) es una función anónima que se 
                //ejecuta en ese momento
            }
            <button onClick={add}>Suma </button>
            <button onClick={substract}>Resta</button>
            <button onClick={()=> setCounter(0)}>Reset</button>
        </>
    );
}

export default Hooks;