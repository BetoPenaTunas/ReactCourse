import { Component,React } from 'react'

const App = () => {
  return (
    <div>
        <h1>Hello World with Component!</h1>
    </div>
  )
}

/* ---> Así se hacían los COMPONENTES con CLASES  */
class AppWithClass extends Component{

    /* -->Manejo de ESTADOS con Clases */
    constructor(props){
        super(props);   /* "super" por que extiende de una Clase Superior */

        /* El objeto "state" no se podía llamar de otra forma */
        this.state={
            count:0
        }

    }

    componentDidMount(){
        console.log("I'll appear only ONCE. In the Mount");
    }

    componentDidUpdate(){
        console.log("I'll appear in every change of STATE");
    }
    render(){
        return (
            <div>
                <h1>Hello World with Classes!</h1>
                <h2>Counter: {this.state.count}</h2>    {/* Es obligatorio usar "this" */}
                <button onClick={()=>this.setState({count:this.state.count+1})}>    {/* Exoste un método setState que cambia el estado de VARIABLES y RENDEREIZA */}
                    +1
                </button>
                <br /><br />
                <h3>Here we have a PROP: {this.props.anyProp}</h3>
            </div>
          )
    }
    
}

export{ App,AppWithClass}