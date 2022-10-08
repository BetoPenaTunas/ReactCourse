import {React,useContext} from 'react'
import { currentSongContext } from './context/currentSongContext';
//import rand from "randomcolor";
import { useFavorites } from './context/FavoriteHomeContext';
export const Song = ({song,styles}) => {
  
  /* --> CONSUMER< --- */
  /* Este es un CONSUMER ocupado con un HOOK */
  /* Se hace OBJECT DESTRUCTURING, ver "currentSongContext" */
  const {setCurrentSong}=useContext(currentSongContext)

  /* --->CONSUMER MODERNO<--- */
  const{favoriteSongs,setFavoriteSongs} =useFavorites();

  const addFavoriteSong = () =>{

    /* includes busca el ELEMENTO "song" dentro de la LISTA de reproducciones de "songs" */
    /* Busca un elemento dentro de un ARRAY, retorna TRUE si lo encuentra, FALSE si NO */
    const exist= favoriteSongs.includes(song);  //Notar bien la sintáxis de INCLUDES

    /* -->EVITANDO AGREGAR UNA CANCIÓN A FAVORITOS, VARIAS VECES <--- */
    if(!exist){
      /* Con la función que CAMBIA DE ESTADO, CREAMOS UN NUEVO ESTADO, no lo MOFICAMOS(Es una regla en LA FUNCIÓN QUE MODIFICA EL ESTADO) */
      setFavoriteSongs([...favoriteSongs,song])   /* Se crea un nuevo ARRAY, con las canciones anteriores, más la canción actual que se SELECCIONE con el BOTÓN FAVORITE */
      console.log(favoriteSongs);
    }
  }

  const removeFromFavorites= ()=>{
    /* Eliminando mi Favorite */
    /* Recorriendo la lista de CANCIONES */
    /* Al haber un cambio en "setFavoriteSongs" se RENDERIZA la aplicación, gracias al useEffect que está en FavoriteHomeContext */
    setFavoriteSongs(favoriteSongs.filter(fs=> fs.id!==song.id))  /* Fijando un nuevo OBJETO al ESTADO */
  }

  return (
<div 
    /* key={index}  */  /* Esto va en el NOMBRE DEL COMPONENTE ver "Search.jsx" */
    className={styles.song} /* Para dar ESTILOS, SE OCUPAN LOS MÓDULOS, especificamente el Search.module.css */
    style={{
    backgroundColor:song.colorBg //Asignando un color RANDOM, esto sólo se puede hacer con JAVASCRIPT y desde AQUÍ
            }}
>   
    <h3>
        Canción: {song.name} - Artista:{song.artistName}  - Album:{song.albumName}
    </h3>

    {/* Botton que actualiza el estado de la canción que se reproducirá */}
    <button onClick={()=>setCurrentSong(song)}>Play</button>
    <button onClick={addFavoriteSong}>Favorite</button>
    <button onClick={removeFromFavorites}>Remove</button>
</div>
  )
}
