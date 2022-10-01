import {React,useRef,useState,useEffect} from 'react'
import { Reproductor } from './Reproductor'
import "./styles.css"
import styles from "./Search.module.css"
//import rand from "randomcolor"; /* Librería que sirve para dar un COLOR RANDOM A ALGO */
import { Song } from './Song';
                                /* rand --> Puede ser otro nombre  */
export const Search = ({favoriteSongs,setFavoriteSongs}) => {
    
    const queryRef=useRef(null)    /* Este HOOK Tiene una variable de estado modificable */
                                /* Pero no una función que modifique y RENDERICE A la vez */
                                /* Checar la clase 12, en la parte de REFS */
    
    const [songs, setSongs] = useState([])    /* Canciones, por defecto es 0  */

    const [currentSong, setCurrentSong]= useState(null) /* Estado que sirve para SABER QUÉ CANCIÓN se MUESTRA en el reproductor*/
                                                        /* Inicialmente está en NULL,se tiene que hacer un CONDICIONAL RENDERING */


    const search = async () => {
        setSongs([])    /* Esto es NECESARIO para que se limpie una BÚSQUEDA ANTERIOR */
        const queryString =queryRef.current.value; /* Aquí se ocupa REF, SE RECUPERA EL VALOR DE LA VARIABLE DE ESTADO*/
        
        /* --> HACIENDO LLAMADO A LA API con la INPUT que el usuario ESCRIBIÓ  */
        let baseURL="https://api.napster.com"
        let key="apikey=ZTk2YjY4MjMtMDAzYy00MTg4LWE2MjYtZDIzNjJmMmM0YTdm"
        let query=`query=${queryString}` 
        let url = baseURL + `/v2.2/search/verbose?${key}&${query}`;
        let response = await fetch(url)
        let json = await response.json()

        /* Guardando el json en un ESTADO a través de su función */
        setSongs(json.search.data.tracks); /* NOS INTERESAN LAS CANCIONES NADAMÁS  */
        console.log(songs);
        
    }

    /* 
        Cada que cambie la variable de estado songs, 
        se imprimirá la nueva información que songs 
        tenga. 
    */
    useEffect(
        ()=>{
            console.log('--->USE EFFECT<--');
            console.log(songs);
        },[songs]);

    return (
    <div  className="App">
        {/* Interesa acceder a la info que el usuario VAYA ESCRIBIENDO */}
        <input ref={queryRef} />    {/* Guardando el NODO HTML en queryRef */}
        <button onClick={search}>Search</button>    {/* Al hacer click, ir ejecutar "search" */}
        
        
        <section className={styles.songContainer}>
            {/* --> IMPRIMIENDO LAS CANCIONES <---        */}
            {
                songs.map((song,index)=>(
                    <Song 
                        key={index} 
                        song={song} 
                        setCurrentSong={setCurrentSong} 
                        styles={styles}
                        favoriteSongs={favoriteSongs}
                        setFavoriteSongs={setFavoriteSongs}
                    />
                ))
            }

        </section>
        
        {
            /* -->HACIENDO CONDITIONAL RENDERING en caso de que currentSong == null
             */
            currentSong && (
            /* -->Llamando al componente REPRODUCTOR <--- */
            <Reproductor 
            source={currentSong.previewURL}
            name={currentSong.name}
            album={currentSong.albumName}
            artist={currentSong.artistName}
            />)
        }


        

        </div>    
    
   );
}
