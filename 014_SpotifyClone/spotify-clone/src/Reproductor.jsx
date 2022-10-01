import {useAudio} from 'react-use';
import styles from './Reproductor.module.css' /* Modulo que es COMO UN OBJETO y al cual puede ser accedido a través de sus propiedades*/
                                              /* Para dar ESTILOS, SE OCUPAN LOS MÓDULOS, especificamente el Reproductor.module.css */
/* -->TODO ESTO ES UN HOOK QUE YA ALGUIEN CREÓ<--- */
export const Reproductor = ({source,name,album,artist}) => {
  const [audio, state, controls /* ref */] = useAudio({
    
    /* Archivo a reproducir */
    src: source,   
    
    /* Auto-reproducción del archivo de arriba */
    autoPlay: true, /* Se reproduce cuando se le de CLICK Al botón PLAY */
  });

  return (
    <div className={styles.reproductor}>  {/* Se accede a styles a la propiedad del reproductor */}
      {audio}   {/* Audio permite que se escuche La canción */}
      <h2>{name} - {artist} - {album}</h2>

      {/* 
        STATE ES UN ESTADO QUE SIRVE PARA MUCHAS COSAS, TIENE DISTINTAS PROPIEDADES 
      <pre>{JSON.stringify(state, null, 2)}</pre> */}
      <h3>time: {state.time}</h3>

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