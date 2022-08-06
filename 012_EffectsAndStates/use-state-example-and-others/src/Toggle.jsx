import React, { useEffect } from 'react'
import { useState } from 'react'

export const Toggle = (prop) => {

    /* Estado inicial == visible */
    const [visibility, setVisibility] = useState("visible")

    useEffect(()=>{
        const toggle = () => {
            /* console.log("Changing..."); */
            setVisibility(v=> { /* SE RENwDERIZA POR CADA CAMBIO DE ESTADO */
                /* Si está en visible, ponlo en hidden */
                return v === "visible" ? "hidden" : "visible"
            })
        };

        const id=setInterval(toggle,2_000) /* Cambiar el INTERVALO, si no PARPADEA */
                                /* Esto en OCASIONES hace que la PÁGINA VAYA MUY LENTA, cuando se aparece y desaparece algo como  el CHECKBOX de Blink*/
                                /* Cuando Toogle(El número que es un contador) desaparezca por el CHECKBOX, se hará un setInterval a un componente INEXISTENTE */
                                /* Este error se soluciona CON OTRA TÉCNICA */
                                /* Se conoce como MEMORY LINK == Algo que corre de FONDO, en este caso un setInterval de un COMPONENTE inexistente */
                                
                                //* En pocas palabras, gracias al CheckBox del archivo Blink.tsx el Componente Toggle aparece y desaparace
                                //* pero setInterval se sigue ejecutando. 
                                //* Se tiene que hallar una forma de DETENER el setInterval, cuando Toggle no exista 
                                //* Para eso se ocupa el id 
        
        //* ----->DETENIENDO UNA ACCIÓN CUANDO NO EXISTE COMPONENTE<-----
        /* setInterval y setTimeOut retornan un id, que se puede usar para detener la acción de estas 2 funciones, con la ayuda de clearInterval() */
        const cleanup=()=>{
            console.log('Cleaning');
            clearInterval(id);
        };

        //* La función retorna otra función, esta última es cleanup y sólo se ejecuta 
        //* cuando haya un cambio en el arreglo de dependencias o cuando el componente SE DESTRUYA, en este caso como el arreglo está 
        //* vacío, sólo se ejecuta y retorna "cleanup" cuando el componente Toggle DESAPARECE o se DESTRUYE, por efecto de el checkbox de Blink(línea 18)
        return cleanup;    //* NO se ejecuta SIEMPRE, sólo cuando CAMBIA O NO EXISTE, checar en el console.log()
                            /* -->VER EL CICLO DE VIDA DE useEffect para ENTENDERLE MEJOR */
                            /* -->***COMPRENDER MEJOR CON EJEMPLOS, NO QUEDÓ MUY CLARO */


        },[])   /* Si el arreglo está vacío, LA FUNCIÓN  SÓLO SE EJECUTARÁ 1 VEZ, AL PRIMER RENDER*/
    
    return( 
        /* Children retorna el Hijo del Componente */
        <div style={{visibility}}>{prop.children}</div>
    );
}
