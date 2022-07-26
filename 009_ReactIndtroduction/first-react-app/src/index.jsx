/* Importando las dependencias desde el package.json */
import React from "react"
import ReactDOM from "react-dom"

/* Importando el componente App.jsx */
import App from "./App"
import Hooks from "./Hooks"

/* render(ELEMENTO a renderizar(App.jsx), Dónde se RENDERIZARÁ ) */
ReactDOM.render(<App/>,document.getElementById("root"))
ReactDOM.render(<Hooks/>,document.getElementById("counter"))