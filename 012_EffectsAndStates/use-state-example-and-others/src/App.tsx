import { useState } from "react";

const fnLong = ():number =>{
  for(let i=0;i<10_000_00000;i++){

  }
  return 42;
}

function App() {
  
  //* ----->EXPLICANDO EL FUNCIONAMIENTO DE useState<-----
    

  //*  --> useStatet(value or function) <---
  /*
    Puede recibir un VALOR o una FUNCIÓN

    Hay que tener mucho cuidado en qué valor inicial se le da a "useState"
    debido a que si le asignamos una función que calcula algo largo como "fnLong"
    se tardará mucho en CADA RENDERIZADO, ya que eso es lo que ocurre en cada cambio
    de ESTADO(en este caso, al darle click al button >1, descomentar lo de la línea 21)

    Si quiero mandar a llamar a una función LARGA, para optmizar el renderizado, se hace 
    lo siguiente: 
    1.() => fnLong(). Ejecutar una función anónima, para que sólo se ejecute en el PRIMER 
                    RENDER

    2.fnLong()       ESTO carga cada vez que se RENDERIZA, se tardará 

    1. const x= () => fnLong() --> Es menos tardado, NO SE EJECUTA EN EL MOMENTO 
    2. const y=fnLongo() --> Es más tardado, por que sí SE EJECUTA LA FUNCIÓN y se debe esperar su FIN 
  */

    //* ----->setCount o setState<-----
    /* 
      Cada función es única en cada RENDER
      setState(value or function) --> RECIBE UN VALOR O UNA FUNCIÓN
          --->MUY RECOMENDABLE PASARLE UNA FUNCIÓN <---
          
    */

  const [count, setCount] = useState(0/* ()=>fnLong() */ /* fnLong() */) /* count --> Es una variable de estado */

  
  /* Con esta impresión, se puede ver que AL CAMBIO DE ESTADO se vuelve 
     a llamar a la FUNCIÓN
  */
  console.log("Rendering...");


  return (  /* Se retorna este HTML */
    <>
      <h1>COUNT TO EXPLAIN useState HOOK</h1>
      <h1>{count}</h1>

      {/* setCount --> Actualiza la variable de estado
                   --> Cuando la variable cambia de estado, REACT manda a llamar
                   --> a la función App de nuevo, para retornar un NUEVO HTML. 
                   --> En pocas palabras "AL CAMBIO DE ESTADO O PROPIEDAD 
                   --> SE RENDERIZA EL COMPONENTE"
                   --> Es ÚNICA en cada RENDER 

          setCout(value or funcion ) --> RECIBE UN VALOR O UNA FUNCIÓN
          --->MUY RECOMENDABLE PASARLE UNA FUNCIÓN y NO UN VALOR<---

      */}
      <button onClick={()=>setCount(count=>count+1/* count+1 */)}>+1</button>
    </>
  );
}

export default App;
