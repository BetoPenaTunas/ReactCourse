import React from 'react'
import { useState,useRef } from 'react'
import { useStateWithoutRending } from './hooks/useStateWithoutRending'

export const App = () => {

//* ----->REFS AND REDUCERS <-----
    
    //* ----->First Ref<----
    /* 
        INTRO:Lo que en ocasiones se quiere es RECOLECTAR DATOS 
        de ciertas acciones que han OCURRIDO, pero no quiero que 
        esa VARIABLE Y TODO LA APLICACIÓN se vuelva RENDERIZAR 
        por cada ACCIÓN. 
    */


    /* No se debe ocupar setTimeClicked, para no RENDERIZAR toda la App */
    /* Se debe tener un Objeto en el ESTADO INICIAL */
    /* Use state siempre retorna el mismo valor, a menos que se ocupe setTimeClicked() */
    /* En este caso, jamás se ocupará setTimeClicked() */
    /* Simplemente se ocupará la propiedad "actual" de un objeto, que está asignada a
        timesClicked, "actual" se puede como una variable que cambia, pero "actual"
        no es una variable de estado, por lo tanto NO SE RENDERIZA la App
    */
    const [timesClicked, setTimeClicked] = useState({actual:0})
    const [name, setName] = useState("")

    /* --> Aquí se ocupa un HOOK personalizado <-- */
    /* Que es igual a un HOOK llamado REF, que ya lo trae REACT*/
    const [loved]=useStateWithoutRending(0)


    console.log('Rending...');
  return (
    <div className='App'>
        <h1>Showing the use of Ref</h1>
        No rendering: <input type="text" value={name} onChange={e=>setName(e.target.value)}  />
        <button onClick={()=>timesClicked.actual++}>Like</button>
        <button onClick={()=> console.log("You've clicked like: ",timesClicked,"times")}>Show Liks in Console</button>
        
        {/* Using a custom HOOK */}
        <br /><br />
        No rendering with a Custom Hook: <input type="text" value={name} onChange={e=>setName(e.target.value)}  />
        <button onClick={()=>loved.current++}>Love</button>
        <button onClick={()=> console.log("You've clicked love: ",loved.current,"times")}>Show Liks in Console</button>

        

    </div>
  )
}
