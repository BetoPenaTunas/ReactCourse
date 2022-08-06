import { useState,useEffect } from "react";


//* ----->HOOK PERSONALIZADO<-----
/* targetKey == valor INICIAL de la letra del teclado que el usuario PRESIONARÁ  */
export const useKeyPress = (targetKey) =>{
    const [keyPressed, setKeyPressed] = useState(false);

    /* event == evento keyDown y KeyUp se PASAN IMPLÍCITAMENTE a las funciones 
        en los EVENTLISTENERS
    */
    const downHandler= (event) =>{
        if(event.key===targetKey){
            setKeyPressed(true)
        }

    }

    const upHandler = (event) =>{
        if(event.key===targetKey){
            setKeyPressed(false)
        }
    }

    useEffect(()=>{
        
        window.addEventListener("keydown",downHandler)
        window.addEventListener("keyup",upHandler)

        /* --> EL return es un CLEANUP <--
            Sólo se aplica cuando NO EXISTEN LOS ÍCONOS
            Es una función que limpia ***ENTENDER MEJOR.
            Siempre que haya un eventLister, BORARRARLO 
        */
        return () =>{
            
            window.removeEventListener("keydown",downHandler)
            window.removeEventListener("keyup",upHandler)
        }
    }
    
    ,[]);   /* [] -->Arreglo de dependecias vacío, SE EJECUTA 1 SÓLA VEZ */

    return keyPressed;
}