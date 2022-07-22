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
    return (
        <>
            <h1>Hello World with React !!!</h1>
            <User name="Oscar"></User>
            <User name="Alberto"></User>
        </>
        
    );
}

// Necesitamos exportar este componente si es que 
// lo queremos ocupar en otro archivo. 
// Exportamos todo (default) lo de este componente

export default App