import { createContext,useEffect,useState } from "react";

/* --->CONTEXT<---- */
/* 
    Ayuda a tener un ESTADO GLOBAL para todos los 
    componentes. 
*/
/* Se exporta para utilizar dicho context */              
export const currentSongContext = createContext();

/* Este initial state almacena en el localStorage un elemento "current" */
/* que tiene el valor ACTUAL de la CANCIÓN DEL REPRODUCTOR */
/* Ocupa un useEffect también  */
const initialState =JSON.parse(
    /* NOTA: localStorage maneja JSONs, entonces colocar notación JSON --> "previewURL":"value" */
    localStorage.getItem("current") || `{"previewURL":"","name":"","albumName":"","artistName":""}`
);

/* --->PROVIDER CON MAYÚSCULAS <-- */
                                    /* Se reciben los hijos "children" */
export const CurrentSongProvider = ({children}) =>{ /* Este como "componente" es el Provider*/

    /* Lo que se quiere compartir  */
    const [currentSong, setCurrentSong]= useState({previewURL:"",name:"",albumName:"",artistName:""})     /* No debe ser "null" por que truena la aplicación */
    
    /* useEffect que ayuda a ver a "current" o el valor ACTUAL DE LA CACIÓN*/
    useEffect(()=>{
        /* "currentSong" es un objeto en JavaScript, se debe de convertir a notación JSON */
        /* Para que pueda ser colocado en el "localStorage" */
        localStorage.setItem("current",JSON.stringify(currentSong))
    },[currentSong]);
    return(
        <currentSongContext.Provider value={{currentSong, setCurrentSong}}> {/* value, OBJETOS que se deben compartir  */}
            {children}  {/* Se renderizan los hijos dentro del Provider */}
        </currentSongContext.Provider>
    )
}