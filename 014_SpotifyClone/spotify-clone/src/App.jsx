import { Search } from './Search';
import "./styles.css"
import {
    BrowserRouter as Router, /* Componente padre donde se engloba la APP, CONTROLA TODAS LAS RUTAS*/
                  /* as es un ALIAS */
    Routes, /* Aquí se coloca la LISTA DE RUTAS  */
    Route,  /* Crea las rutas  */
    Link    /* Va a las rutas */
  } from "react-router-dom";
export const App = () => {
    
    return (
        <Router>
            <Link to={"/"}>Index</Link>
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
                    element={<h1>Página Principal</h1>}>
                </Route>

                {/* 
                    Route   --> Crea las rutas 
                    element --> Renderiza el Componente necesario 
                */}
                <Route path="/search" element={ <Search /> }> 
                </Route>
                
            </Routes>
        </Router>
    );
}
