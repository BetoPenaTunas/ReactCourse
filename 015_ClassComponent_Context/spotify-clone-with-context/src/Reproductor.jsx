import { useContext } from 'react';
import {useAudio} from 'react-use';
import { currentSongContext } from './context/currentSongContext';
import styles from './Reproductor.module.css' /* Modulo que es COMO UN OBJETO y al cual puede ser accedido a través de sus propiedades*/
                                              /* Para dar ESTILOS, SE OCUPAN LOS MÓDULOS, especificamente el Reproductor.module.css */

/* -->REPRODUCTOR se ocupa en Home.jsx y en Search.jsx */
/* -->TODO ESTO ES UN HOOK QUE YA ALGUIEN CREÓ<--- */
export const Reproductor = (/* {source,name,album,artist} */) => {

  /* --->COSUMER del CONTEXT, de forma ANTIGUA <--- */
  /* Aquí se hace objectDestructuring de currentSong que es el ESTADO GLOBAL, Ahora ya no se recibe como Propiedad del componente REPRODUCTOR */
  /* Se ocupa como Context por que se quiere tener info del ESTADO de currentSong tanto en "Search.jsx" como en "Home.jsx" */
  const {currentSong:{previewURL,name,albumName,artistName},setCurrentSong}=useContext(currentSongContext)
                      /* previewURL es el link que da la info del archivo.mp3, se puede ver el JSON que responde la API */
  const [audio, state, controls /* ref */] = useAudio({
    
    /* Archivo a reproducir */
    src: previewURL,   
    
    /* Auto-reproducción del archivo de arriba */
    autoPlay: true, /* Se reproduce cuando se le de CLICK Al botón PLAY */
  });

  /* Esto sirve para que el REPRODUCTOR no APAREZCA cuando no se ha seleccionado una CANCIÓN, AL INICIO, Cuando name="" */
  if(name.length<=1){
    return null;    /* Recordar que si un COMPONENTE retorna NULL, simplemente no se pinta un HTML */
  }
  

  return (
    <div className={styles.reproductor}>  {/* Se accede a styles a la propiedad del reproductor */}
      
      <h2>{name} - {artistName} - {albumName}</h2>
      {audio}   {/* Audio permite que se escuche La canción */}

      {/* 
        STATE ES UN ESTADO QUE SIRVE PARA MUCHAS COSAS, TIENE DISTINTAS PROPIEDADES 
      <pre>{JSON.stringify(state, null, 2)}</pre> */}
      
      {/* --->BOTÓN QUE ELIMINA LA CANCIÓN ACTUAL DEL REPRODUCTOR y desaparece el Reproductor*/}
      {/* Recordar que un "set" debe de llevar un OBJETO en su cambio de ESTADO */}
      <button onClick={()=>setCurrentSong({previewURL:"",name:"",albumName:"",artistName:""})}>Remove Current Song</button>

      <div>

        {/* SLIDER DEL VOLUMEN */}
        <input type="range" 
          value={state.volume} 
          min="0.0" 
          max="1.0"
          onChange={(e)=>controls.volume(Number(e.target.value))} /* Al cambio, se actualiza el VOLUMEN */
          step="0.05"   /* Incrementos DEL SLIDER  */
        />

        {/* Haciendo el botón de PLAY/PAUSE con el operador TERNARIO */}
        {/* También CAMBIA EL Texto que va dentro de la ETIQUETA HTML */}
        <button onClick={state.paused ? controls.play : controls.pause}>{state.paused ? 'Play' : 'Pause'}</button>
        {/* <button onClick={controls.mute}>Mute</button>
        <button onClick={controls.unmute}>Un-mute</button> */}
        {/* <button onClick={() => controls.volume(.1)}>Volume: 10%</button>
        <button onClick={() => controls.volume(.5)}>Volume: 50%</button>
        <button onClick={() => controls.volume(1)}>Volume: 100%</button>
 */}
        {/* -->RETROCEDER <-- */}
        {/* <button onClick={() => controls.seek(state.time - 5)}>-5 sec</button>
        <button onClick={() => controls.seek(state.time + 5)}>+5 sec</button> */}
        </div>
    </div>
  );
};