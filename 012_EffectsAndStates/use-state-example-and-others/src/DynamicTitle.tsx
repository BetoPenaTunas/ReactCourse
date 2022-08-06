import React, { useEffect } from 'react'
import { useState } from 'react'

/* La siguiente FUNCIÓN SIRVE PARA RENDERIZAR EL TÍTULO
   Con base al cambio que se vaya haciendo en la INPUT
*/
export const DynamicTitle = () => {

    const [count, setCount] = useState(0)   /* //? la asignación de estados iniciales, SÓLO SE HACE 1 VEZ, en el primer RENDER */
    const [text, setText] = useState(" ")
    

    useEffect(
      ()=>{
        document.title=text //Cambia el título de la pestaña, al cambio de estado de TEXT
                            //Sólo se renderizará el titulo, no TODO lo demás 
        console.log("Changing the title, since useEffect");
      },[text]  
    )

    //* Si NO se ocupa un useEffect entonces todo VOLVERÁ A RENDERIZARSE
    //* y yo NO quiero que todo se RENDERICE, por ejemplo, si se da click en el BUTTON, 
    //* todo se volverá a Renderizar, junto con el console.log(). Es Por eso que se 
    //* OCUPA useEffect, para que CIERTA FUNCIÓN SE EJECUTE en CADA CAMBIO DE ESTADO 
    //* de cierta VARIABLE en este caso, de text. 
    //* En pocas palabras, useEffect sirve para EJECUTAR una función en relación a un 
    //* cambio de estado de una VARIABLE DE ESTADO, sin TENER que RENDERIZAR TODO.
    //* NOTA: los 2 argumentos de useEffect deben ser los mismos, ver la función de arriba,
    //* "text" está directa o indirectamente. (IGUALDAD REFERENCIAL)


    //* PARA VER ESTE EJEMPLO MÁS CLARO, COMENTAR EL useEffect de arriba y DESCOMENTAR
    //* el document.title de abajo, VER LA CONSOLA DEL NAVEGADOR
    
    // document.title = text;      //El título está vacío en el PRIMER RENDER
    console.log("Changing the TITLE from all the app...");   
    return (
        <>
              
            <h1>COUNT to EXPLAIN useEffect </h1>
            <h1>Count:{count}</h1>
            <button onClick={
                ()=>setCount(count+1)   
            }
            >+1</button><br/><br/>

            {/* Al cambiar el texto de la entrada, SE RENDERIZA este componente
                y el titúlo cambia dicho texto
            */}
            Enter the new Title for the Tab:<input type="text" value={text} onChange={(e) => setText(e.target.value)} />
        
        </>

    )
}
