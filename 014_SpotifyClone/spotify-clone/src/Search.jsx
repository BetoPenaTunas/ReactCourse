import {React,useRef,useState,useEffect} from 'react'
import { Reproductor } from './Reproductor'
import "./styles.css"
export const Search = () => {
    
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
            console.log(songs);
        },[songs]);

    return (
    <div className='App'>
        {/* Interesa acceder a la info que el usuario VAYA ESCRIBIENDO */}
        <input ref={queryRef} />    {/* Guardando el NODO HTML en queryRef */}
        <button onClick={search}>Search</button>    {/* Al hacer click, ir ejecutar "search" */}
    
           
        
        {/* --> IMPRIMIENDO LAS CANCIONES <---        */}
        {
            songs.map((song,index)=>(
               <div key={index}>
                    <h3>
                        Canción: {song.name} - Artista:{song.artistName}  - Album:{song.albumName}
                    </h3>

                    {/* Botton que actualiza el estado de la canción que se reproducirá */}
                    <button onClick={()=>setCurrentSong(song)}>Play</button>
               </div>
               
            ))
        }
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
