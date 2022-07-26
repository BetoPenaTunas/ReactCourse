/* Importando algo de User.jsx*/
import User from "./User";

/* 
   En las líneas 15 y 16 se puede ver 
   el uso del nuevo Componente User.jsx
   que sería como una nueva etiqueta HTML pero con
   propiedades que son un sólo argumento, que recibe
   la función User.
*/

const App = () =>{
    
    const arr =["Cristy","Pepe","Liz"]

    return (
        <>
            <h1>Hello World with React !!!</h1>
            <User name="Oscar"></User>
            <User name="Alberto"></User>

            {
                //-->RENDERIZANDO DE OBJETOS<--
                /*
                Se ocupa .map para iterar en cada elemento
                del array y retornar un nuevo arreglo con
                notación JSX <p>elementoJS</p>
                Ver documentación de .map 
                */
                arr.map((nameJSX,i)=>(
                    <p key={i}>Hello, it's {nameJSX}</p> //Poner "{}" por que ya estamos en JSX
                ))

            }
        </>
        
    );
}

// Necesitamos exportar este componente si es que 
// lo queremos ocupar en otro archivo. 
// Exportamos todo (default) lo de este componente

export default App