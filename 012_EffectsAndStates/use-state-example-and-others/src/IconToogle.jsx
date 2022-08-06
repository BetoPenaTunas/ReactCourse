import React from 'react'
import { useKeyPress } from './Hooks/useKeyPress'

/* La siguiente App implementa un HOOK personalizado */
export const IconToogle = () => {

    /* d == letra que el usuario debe presionar para que se VEA EL ICONO */
    /* useKeyPress retorna una variable booleana  */
    const dinoPress = useKeyPress("d");
    
    /* 
        
        Cada vez que se manda a llamar el HOOK "useKeyPress" se puede ver 
        que es independiente. 
    */
    const happyFace = useKeyPress("h");
    const soccerBall = useKeyPress("s");
    return (
        <div>
            <h1>App shows a new Hook which uses useState and cleanUp</h1>
            <h2>d: to show DinoCat</h2>
            <h2>h: to show a Happy Face</h2>
            <h2>s: to show a soccer ball</h2>
            {/* && --> OPERADOR DE CONDITIONAL RENDERING */}
            {/* Si dinoPress === true, renderiza al dinoGato */}
            {dinoPress && <h1>🐱‍🐉</h1>}
            {happyFace && <h1>😊</h1>}
            {soccerBall && <h1>⚽</h1>}

        </div>
    )
}
