import React, { useRef } from 'react'

//* ----->ENFOCARSE AL PRIMER INPUT<-----
/*  El siguiente programa enfoca al primer input
    al presionar el botón. 

    Esto se podría hacer con JS puro, pero puede 
    haber inconsistencias, ya que tal vez los IDs se repitan 
    o los mismos COMPONENTES 
*/

export const FocusToTheFirstInput = () => {

    /*  useRef es un HOOK que tiene una variable 
        que va cambiando, pero que no hace que se renderice
        todo el componente
    */
        // REF != REFERENCIA
    const inputRef = useRef(null)  /* Estado Inicial == null */

    return(
        <div className='App'>
            <br />
            <h1>Focus to the First Input</h1>

            {/* 
                
                ref es una prop que hace una reasignación a inputRef.
                Ahora el REF "inputRef" == document.getElementById("de la etiqueta input")
                
                Es asignarle una referencia al "inputRef" de la etiqueta input de abajo
                inputRef apunta a la primera INPUT
            */}
            <input ref={inputRef} />
            
            <br /><br />
            <input />
            <br /><br />

            <button 
            onClick={
                ()=>inputRef.current.focus()   /* input.current==Referencia de la etiqueta, de la línea 34 */
            }>                              {/* focus() --> Es el focus de JS, no de HTML */}
                Click to Focus to the First Element
            </button>

            {/* -->PODEMOS ELIMINAR LO DEL INPUT También, utilizado el mismo concepto de REF */}
            <br /><br />
            <button
            onClick={
                ()=>inputRef.current.value=""
            }
            >
                Click to Delete de value of the first input
            </button>
        </div>
    );
}
