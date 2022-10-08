import { Song } from './Song'
import styles from "./Home.module.css"
import styles2 from "./Search.module.css"
import { useFavorites } from './context/FavoriteHomeContext'
export const Home = () => {


  /* -->CONSUMER DEL useContext<--- */
  /* Para esto SIRVE useFavorites */
  const {favoriteSongs}=useFavorites(); 
  /* Se recuperan los OBJETOS con ObjectDestructuring */

  return (
    <main>
        <h1>Favorite Songs</h1>
        <section className={styles.songContainer}>
            {/* "favoriteSongs" es una LISTA recuperada del localStorage */}
            {favoriteSongs.length>0                                                 /* Comentar y descomentar setCurrentSong de aquí y lo del COMPONENTE "Song.jsx" en sus PROPIEDADES */
            ?favoriteSongs.map((song,index)=> <Song key={index} song={song} styles={styles2}/>)
            :(<h2>Empty favorite songs list</h2>)
            }

        </section>
        
    </main>
  )
}
