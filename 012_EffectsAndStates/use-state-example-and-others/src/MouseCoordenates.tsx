import { useState,useEffect } from "react";

//* ----->COMPONENTE QUE MUESTRA LA RÁPIDEZ DE REACT<-----
//  El componente muestra las coordenadas del Mouse en la INTERFAZ HTML
//  actualizando cada número, cada que se mueve el MOUSE  
export const MouseCoordenates = () => {
    
    // Asignando estados a DOS VARIABLES(x,y), que son COORDENADAS
    const [{x,y}, setCoordinates] = useState({x:0,y:0})

    useEffect(
        ()=>{
            /* Agregando un eventLister a TODO EL DOCUMENTO */
            /* Para que detecte las COORDENADAS del mouse */
            /* e == Objeto Event que trae distinitas propiedades */
            /* clientY y clientX traen las coordenadas */

            /* Por cada movimiento del MOUSE se ACTUALIZA una variable de estado
                y se RENDERIZA EL COMPONENTE 
            */
            
            /* e=>console.log({e}) */
            const update= ({clientX,clientY}:{clientX:number,clientY:number})=>{
                setCoordinates({x:clientX,y:clientY})
                console.log('Calculando');
            }
            document.addEventListener("mousemove",update)

            /* Se deja de EJECUTAR el EVENTLISTENER cuando el componente MouseCoordates.tsx Desaparece*/
            return () => document.removeEventListener("mousemove",update)

        },
        []  /* Sólo se ejecuta UNA VEZ la anterior FUNCIÓN */
    );

   return (
    <>
        <h1>App shows mouse COORDENATES</h1>
        <h2>x:{x}</h2>
        <h2>y:{y}</h2>
    </>

    )
}

