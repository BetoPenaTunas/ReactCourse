import {useAudio} from 'react-use';
import styles from './Reproductor.module.css'
/* -->TODO ESTO ES UN HOOK QUE YA ALGUIEN CREÓ<--- */
export const Reproductor = ({source,name,album,artist}) => {
  const [audio, state, controls, ref] = useAudio({
    
    /* Archivo a reproducir */
    src: source,   
    
    /* Auto-reproducción del archivo de arriba */
    autoPlay: false,
  });

  return (
    <div className={styles.reproductor}>
      {audio}   {/* Audio permite que se escuche La canción */}
      <h2>{name} - {artist} - {album}</h2>

      {/* 
        STATE ES UN ESTADO QUE SIRVE PARA MUCHAS COSAS
      <pre>{JSON.stringify(state, null, 2)}</pre> */}
      <h3>time: {state.time}</h3>

      <div>
        {/* Haciendo el botón de PLAY/PAUSE con el operador TERNARIO */}
        <button onClick={state.paused ? controls.play : controls.pause}>{state.paused ? 'Play' : 'Pause'}</button>
        <br/>
        <button onClick={controls.mute}>Mute</button>
        <button onClick={controls.unmute}>Un-mute</button>
        <br/>
        <button onClick={() => controls.volume(.1)}>Volume: 10%</button>
        <button onClick={() => controls.volume(.5)}>Volume: 50%</button>
        <button onClick={() => controls.volume(1)}>Volume: 100%</button>
        <br/>

        {/* -->RETROCEDER <-- */}
        <button onClick={() => controls.seek(state.time - 5)}>-5 sec</button>
        <button onClick={() => controls.seek(state.time + 5)}>+5 sec</button>
        </div>
    </div>
  );
};