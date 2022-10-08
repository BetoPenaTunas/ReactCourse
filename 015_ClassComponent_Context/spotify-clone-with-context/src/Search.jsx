import {React,useRef,useState,useEffect} from 'react'
import "./styles.css"
import styles from "./Search.module.css"
import rand from "randomcolor"; /* Librería que sirve para dar un COLOR RANDOM A ALGO */
import { Song } from './Song';
import randomColor from 'randomcolor';

                                /* rand --> Puede ser otro nombre  */

export const Search = () => {
    
    const queryRef=useRef(null)    /* Este HOOK Tiene una variable de estado modificable */
                                /* Pero no una función que modifique y RENDERICE A la vez */
                                /* Checar la clase 12, en la parte de REFS */
    
    const [songs, setSongs] = useState([])    /* Canciones, por defecto es 0, ANTES DE LA BÚSQUEDA */
                                              /* "song" será un estado que contiene UNA LISTA de CANCIONES */
    /* Función que detecta la letra "enter" presionada dentro de la INPUT de BÚSQUEDA */
    const isEnterKey= (e)=>{
        if(e.which===13){
            console.log("It's the enter KEY");
            search()
        }
        else{
            return;
        }
    }
    

    /* -->CONSULTA A LA API <--- */
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

        /* Guardando EL OBJETO RETORNADO DEL .json en un ESTADO*/
        /* Por cada cambio de estado "songs" LA APLICACIÓN SE RENDERIZA */

        /* Con el map, lo que se hace es COPIAR CADA ELEMENTO de la lista "songs" y agregarle una PROPIEDAD que es randomColor()*/
        /* Esa propiedad se ocupa en "Song.jsx" en backgroundColor, para que en el componente "Home.jsx" persista el COLOR*/
        setSongs(json.search.data.tracks.map((rsong)=>({...rsong,colorBg:randomColor()}))); /* NOS INTERESAN LAS CANCIONES NADAMÁS  */
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
        <input ref={queryRef} onKeyDown={isEnterKey}/>    {/* Guardando el NODO HTML en queryRef y DETECTANDO el botón ENTER de la INPUT*/}
        <button onClick={search}>Search</button>    {/* Al hacer click, ir ejecutar "search" */}
        
        
        <section className={styles.songContainer}>
            {/* --> IMPRIMIENDO LAS CANCIONES <---        */}
            {
                songs.map((song,index)=>(
                    <Song 
                        key={index} 
                        song={song} 
                        styles={styles}
                    />
                ))
            }

        </section>

        </div>    
    
   );
}
