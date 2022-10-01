import React from 'react'
import rand from "randomcolor";
export const Song = ({song,setCurrentSong=()=>{},/* setCurrentSong, */styles,favoriteSongs,setFavoriteSongs}) => {
  
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

  return (
<div 
    /* key={index}  */  /* Esto va en el NOMBRE DEL COMPONENTE ver "Search.jsx" */
    className={styles.song} /* Para dar ESTILOS, SE OCUPAN LOS MÓDULOS, especificamente el Search.module.css */
    style={{
    backgroundColor:rand() //Asignando un color RANDOM, esto sólo se puede hacer con JAVASCRIPT
            }}
>   
    <h3>
        Canción: {song.name} - Artista:{song.artistName}  - Album:{song.albumName}
    </h3>

    {/* Botton que actualiza el estado de la canción que se reproducirá */}
    <button onClick={()=>setCurrentSong(song)}>Play</button>
    <button onClick={addFavoriteSong}>Favorite</button>
</div>
  )
}
