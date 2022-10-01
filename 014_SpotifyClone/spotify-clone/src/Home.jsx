import React from 'react'
import { Song } from './Song'
import styles from "./Home.module.css"
import styles2 from "./Search.module.css"
export const Home = ({favoriteSongs}) => {
  return (
    <main>
        <h1>Favorite Songs</h1>
        <section className={styles.songContainer}>

            {/* Se está REUTILIZANDO UN COMPONENTE, ESA ES LA VENTAJA DE REACT      setCurrentSong() es una función vacía por que para HOME no tenemos la FUNCIÓN DE CAMBIO DE ESTADO, como sí la teniamos en "SEARCH.JSX"*/}
                                                                                    {/* Podemos hacer eso o en el componente SONG.JSX colocar un valor por default para esa PROPIEDAD, y luego aquí ya no le mandaríamos nada, comentar setCurrentSong() y asignar un valor por DEFAULT en "Song.jsx " */}
            {favoriteSongs.length>0                                                 /* Comentar y descomentar setCurrentSong de aquí y lo del COMPONENTE "Song.jsx" en sus PROPIEDADES */
            ?favoriteSongs.map((song,index)=> <Song key={index} song={song} /* setCurrentSong={()=>{}} */ styles={styles2}/>)
            :(<h2>Empty favorite songs list</h2>)
        
            }

        </section>
    </main>
  )
}
