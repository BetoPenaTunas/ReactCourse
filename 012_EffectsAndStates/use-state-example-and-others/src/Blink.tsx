import { useState } from "react"
import { Toggle } from "./Toggle"


export const Blink = () => {
    const [showCounter, setShowCounter] = useState(true)    // Sirve para controlar el estado de un CheckBox
    const [count, setCount] = useState(0)
    return (
        <>
            {/* 
            
                Este CheckBox sirve para aparecer y desaparecer 
                el contador. 

                AUNQUE Al desaparecer el contador, habrá un ERROR 
                en CONSOLA
            */}
            <input checked={showCounter} onChange={() => setShowCounter(x => !x)} type="checkbox" />

            <div>
                <h1>COUNT to EXPLAIN BLINK</h1>
                {   
                    // Funciona como un IF, 
                    // showCounter == TRUE o FALSE
                    // El componente "Toggle" retorna algo distinto a FALSE 
                   showCounter && (<Toggle><h1>{count}</h1></Toggle>) 
                    
                }
                
                <button onClick={   
                    /* Al hacer click  */
                    () => setCount(c => c + 1)
                }
                >+1</button>
            </div>
        </>
    )
}
