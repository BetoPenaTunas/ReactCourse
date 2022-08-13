import React from 'react'
import { useState } from 'react'
//* ----->HOOK PROPIO<-----
//* A este hook se le llama REF, ya lo tiene REACT
/* 
    Los hooks personalizables son un mezcla
    del hook useState y/o useEffect para 
    que se haga algo más específico

    En este caso, se requiere un Hook que tenga una
    variable que cambie, pero que por cada cambio no
    SE RENDERIZE toda la APLICACIÓN. No se se ocupará 
    una función de cambio de estado.

    "current" puede ir cambiando de valor pero SIN REDERIZARSE

    REF != REFERENCIA
*/
export const useStateWithoutRending = (init) => {
  
  const[data]=useState({current:init})
  return [data]

}
