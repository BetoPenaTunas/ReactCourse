import { Search } from './Search';  // Importar la ruta u otra página
import "./styles.css"
import { useState, useEffect} from 'react';
import {
    BrowserRouter as Router, /* Componente padre donde se engloba la APP, CONTROLA TODAS LAS RUTAS*/
                  /* as es un ALIAS */
    Routes, /* Aquí se coloca la LISTA DE RUTAS  */
    Route,  /* Crea las rutas  */
    Link    /* Va a las rutas */
  } from "react-router-dom";

import {Home}from "./Home";

/* -->HACIENDO QUE NO SE BORRE LA INFORMACIÓN DE LOS FAVORITOS, utilizando LOCALSTORAGE */
/* Será muy común que se necesite hacer un casteo cuando se LEEN u obtienen OBJETOS, esto depende del tipo de VALOR que estemos fijando en CIERTA CLAVE DEL LocalStorage */
/* Recordar que para localStorage se tiene (LLAVE, VALOR)*/
const initialState=JSON.parse(localStorage.getItem('favoritos') || '[]');     /* Si existe el elemento FAVORITOS recuperalo, sino asignale a initialState = [] un arreglo vacío */ 


export const App = () => {
    
    const [favoriteSongs, setFavoriteSongs] = useState(initialState)  /* Inicialmente es una lista vacía  */
                                                            /* Este estado se pasa a los dos componentes HIJOS a Home y a Search, a los que aparecen ENTRE RUTAS */
    
    useEffect(()=>{
        /* Actualiza el elemento "favoritos" del localStorage cada que cambie el estado de favoriteSongs */
        localStorage.setItem('favoritos',JSON.stringify(favoriteSongs));

    },[favoriteSongs]);

    return (
        <Router>
            <Link to={"/"}>Me</Link>
            {/* Es como una ANCLA <a></a> en HTML, pero LINK va a las rutas */}
            {/* Lo que vaya dentro de la etiqueta LINK se mostrará en todos los lugares */}
            {/* Debido a que LINK es como una BARRA DE NAVEGACIÓN: Aparece en todas las páginas */}
            <Link to={"/search"}>Search</Link>  
            

            {/* Routes contien hijos que serán LAS RUTAS */}
            <Routes>    
                {/* ´-->PÁGINA PRINCIPAL <--- */}
                {/* "exact" indica que el path debe ser exactamente "/" */}
                {/* Si no le ponemos esto, abrá un bug y el h1 aparecerá en todas las rutas con al menos un "/" */}
                <Route exact path='/' 
                    element={<Home favoriteSongs={favoriteSongs}/>}>    {/* Se recomienda que el nombre de la propiedad sea el mismo que el ESTADO que se pasa  */}
                </Route>

                {/* 
                    Route   --> Crea las rutas 
                    element --> Renderiza el Componente necesario 
                */}
                <Route path="/search" element={ 
                    <Search 
                        favoriteSongs={favoriteSongs}   /* favoriteSongs y setFavoriteSongs sirven para VER LAS CANCIONES FAVORITAS, estas PROPIEDADES también se le pasan al component SONG  */
                        setFavoriteSongs={setFavoriteSongs}/> 
                    
                    }> 
                </Route>
                
            </Routes>
        </Router>
    );
}
