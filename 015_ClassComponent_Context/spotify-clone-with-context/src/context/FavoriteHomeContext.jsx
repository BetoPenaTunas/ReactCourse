import { createContext, useContext,useState,useEffect } from "react";

const FavoriteHomeContext=createContext()
const initialState=JSON.parse(localStorage.getItem('favoritos') || '[]');     /* Si existe el elemento FAVORITOS recuperalo, sino asignale a initialState = [] un arreglo vacío */ 
//console.log(initialState);

/* --->PROVIDER CON MAYÚSCULAS <-- */
export const FavoriteProvider = ({children})=>{
    const [favoriteSongs, setFavoriteSongs] = useState(initialState)  
    /* Este estado se pasa a los dos componentes HIJOS a Home y a Search, a los que aparecen ENTRE RUTAS */

    /* --->Esto sirve para añadir o eliminar el nuevo arreglo con los ELEMENTOS ELIMINADOS */
    useEffect(()=>{
        /* Actualiza el elemento "favoritos" del localStorage cada que cambie el estado de favoriteSongs */
        localStorage.setItem('favoritos',JSON.stringify(favoriteSongs));

    },[favoriteSongs]);

    return(
        <FavoriteHomeContext.Provider value={{favoriteSongs, setFavoriteSongs}}>
            {children}
        </FavoriteHomeContext.Provider>
    )
}

/* -->Nueva forma de llamar al CONTEXT con el CONSUMER*/
export const useFavorites=()=>useContext(FavoriteHomeContext)