import { useReducer } from "react";

//* ----->useReducer es un useState pero MEJORADO<-----

/* count y step son estados */
/* el nombre de count y step deben coincidir con los estados que 
   se quieran modificar, VER LÍNEA 41
*/
const reducer = ({count,step},action) =>{

    /* Por cada modificación que se haga de los ESTADOS
        --> TODO SE VUELVE A RENDERIZAR <---
    */
    if(action==="reset") return {count:0,step:0};   /* Se actualizaN LOS ESTADOS */
    if(action==="increment") return {count:count+1,step};
    if(action==="decrement") return {count:Math.max(0,count-1),step}; /* max, hace que no haya números NEGATIVOS */

    if(action==="incrementState") return {count,step:step+1};
    if(action==="decrementState") return {count,step:Math.max(0,step-1)}; 
    
}

export const ReducerTest = () => {

    /* count y step son estados */
    /* useReducer(reducer,0) --> reducer es la función que se creo arriba 
                                y es la encargada de cambiar el estado, 
                                dada cierta acción que se requiera, 
                                Ver los buttons de ABAJO
                             
                            ---> 0 es el estado INICIAL de uno o varios estados

        dispatch --> Es donde se guarda el reducer ()
                     a dispatch se le pasa la acción que el reducer 
                     procesará, VER LOS BUTTONS
    */

    /* El nombre de count y step deben coincidir con los NOMBRES de la función 
        reducer, ver LÍNEA 7
    */
    const [{count,step},dispatch] = useReducer(reducer,{count:0,step:0});
    
    return (
        <>
            <h1>Testing Reducer</h1>
            <h1>Count: {count}</h1>
            <h1>Step:{step}</h1>
            <button onClick={()=>dispatch("increment")}> +1 COUNT </button>
            <button onClick={()=>dispatch("decrement")}> -1 COUNT </button>
            <button onClick={()=>dispatch("incrementState")}> +1 STEP  </button>
            <button onClick={()=>dispatch("decrementState")}> -1 STEP  </button>
            <button onClick={()=>dispatch("reset")}>   RESET  </button>
        </>
    )
}
