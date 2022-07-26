/* import React from 'react'; */  /* Se puede ignorar esto */

function App({name}:{name:string}) {

  const fn =()=> alert('Holi')

  return (

    /* 
      Se importaba lo de la línea 1, por que los divs o etiquetas HTML 
      no son de HTML 100%, sino de REACT, por eso era necesario importar
      React, desde la versión 17 se puede prescindir de dicha línea 1 y 
      y BABEL se la coloca automáticamente 
    */
   /* Se pueden poner styles y event handlers en la etiqueta
      sin embargo, no es recomendable por que no es escalable 
   */
    <div 
    style={{color:"black",backgroundColor:"lightblue",margin:"3rem",padding:"2rem"}} 
    onClick={fn}
    >
      <header>
        holi {name}
      </header>
    </div>
  );
}

export default App;
