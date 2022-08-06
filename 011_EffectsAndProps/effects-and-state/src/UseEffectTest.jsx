import React from 'react'
import { useEffect, useState } from 'react'

const UseEffectTest = () => {
    const [counter, setcounter] = useState(0)
    const [counter2, setcounter2] = useState(0)
         

     
    // * ---> useEffect se ejecuta cada que se RENDERIZA EL COMPONENTE (esto último,si es que useEffect no tiene un SEGUNDO ARGUMENTO O ARREGLO DE DEPENDENCIAS)
    // * Mínimo se ejecutará 1 vez, la primera vez que se carga la página
    // * useEffect(función que depende del ARREGLO DE DEPENDENCIAS, CUANDO EL ESTADO(S) CAMBIE SE EJECUTARÁ LA FUNCIÓN, ARRAY DE DEPENDENCIAS)
    // * Si no tiene el segundo parámetro (ARRAY), se EJECUTARÁ CADA VEZ QUE SE RENDERIZA (25:00)
    // * useEffect ejecuta una función, dependendiendo del cambio de estado del ARRAY DE Dependencias
    // * useEffect(fn, array de dependencias)
    useEffect(() => {
        console.log("Testing useEffect, Counter= ", counter);
    },[counter/* counter2 */])   /* Si el arreglo está vacío, LA FUNCIÓN  SÓLO SE EJECUTARÁ 1 VEZ*/
                                 /* Probar con counter,counter2 y con []*/
    return (
        <>
            <h1>Example</h1>
            <h2>{counter}</h2>
            <button onClick={() => setcounter(counter + 1)}>Add</button>
        </>
    );
}

export default UseEffectTest;