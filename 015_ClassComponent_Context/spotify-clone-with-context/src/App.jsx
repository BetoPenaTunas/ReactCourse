import { Search } from './Search';  // Importar la ruta u otra página
import "./styles.css"
import { Reproductor } from './Reproductor';
import {
    BrowserRouter as Router, /* Componente padre donde se engloba la APP, CONTROLA TODAS LAS RUTAS*/
                  /* as es un ALIAS */
    Routes, /* Aquí se coloca la LISTA DE RUTAS  */
    Route,  /* Crea las rutas  */
    Link    /* Va a las rutas */
  } from "react-router-dom";

import {Home}from "./Home";
import { CurrentSongProvider } from './context/currentSongContext';
import { FavoriteProvider } from './context/FavoriteHomeContext';

export const App = () => {
    
    return (

        <FavoriteProvider>  {/* Se va a ocupar un ESTADO GLOBAL(En los componentes Home y Search), que es favoriteSongs y setFavoriteSongs, está en favoriteHomeContext */}
            <CurrentSongProvider >  {/* Este es el PROVIDER, Debe de ENVOLVER a los componentes donde se debe ocupar el ESTADO GLOBAL   */}
                <Router>
                    <Link to={"/"}>Me</Link>
                    <Link to={"/search"}>Search</Link>  
                    
                    {/* -->POR CADA CAMBIO EN currentSong se RENDERIZA toda la aplicación */}
                    <Routes>    
                         <Route exact path='/' 
                            element={<Home/>}>    {/* Se recomienda que el nombre de la propiedad sea el mismo que el ESTADO que se pasa  */}
                        </Route>


                        <Route path="/search" element={ 
                            <Search /> 
                            }> 
                        </Route>
                        
                    </Routes>
                    
                    <Reproductor/>  {/* El reproductor va a EXISTIR EN TODA LA APLICACIÓN y ocupará currentSong como ESTADO GLOBAL o CONTEXT */}

                </Router>
            </CurrentSongProvider>
        </FavoriteProvider>
    );
}
